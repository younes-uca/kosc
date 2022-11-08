package com.maneo.kosc.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.Entreprise;
import com.maneo.kosc.dao.EntrepriseDao;
import com.maneo.kosc.service.chercheur.facade.EntrepriseChercheurService;

import com.maneo.kosc.ws.rest.provided.vo.EntrepriseVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class EntrepriseChercheurServiceImpl extends AbstractServiceImpl<Entreprise> implements EntrepriseChercheurService {

    @Autowired
    private EntrepriseDao entrepriseDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<Entreprise> findAll() {
        return entrepriseDao.findAll();
    }

    @Override
    public Entreprise findByCode(String code) {
        if (code == null) return null;
        return entrepriseDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String code) {
        return entrepriseDao.deleteByCode(code);
    }

    @Override
    public Entreprise findByIdOrCode(Entreprise entreprise) {
        Entreprise resultat = null;
        if (entreprise != null) {
            if (StringUtil.isNotEmpty(entreprise.getId())) {
                resultat = entrepriseDao.getOne(entreprise.getId());
            } else if (StringUtil.isNotEmpty(entreprise.getCode())) {
                resultat = entrepriseDao.findByCode(entreprise.getCode());
            }
        }
        return resultat;
    }

    @Override
    public Entreprise findById(Long id) {
        if (id == null) return null;
        return entrepriseDao.getOne(id);
    }

    @Override
    public Entreprise findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (entrepriseDao.findById(id).isPresent()) {
            entrepriseDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public Entreprise update(Entreprise entreprise) {
        Entreprise foundedEntreprise = findById(entreprise.getId());
        if (foundedEntreprise == null) return null;
        else {
            return entrepriseDao.save(entreprise);
        }
    }

    @Override
    public Entreprise save(Entreprise entreprise) {

        Entreprise result = null;
        Entreprise foundedEntreprise = findByCode(entreprise.getCode());
        if (foundedEntreprise == null) {


            Entreprise savedEntreprise = entrepriseDao.save(entreprise);

            result = savedEntreprise;
        }

        return result;
    }

    @Override
    public List<Entreprise> save(List<Entreprise> entreprises) {
        List<Entreprise> list = new ArrayList<>();
        for (Entreprise entreprise : entreprises) {
            list.add(save(entreprise));
        }
        return list;
    }


    @Override
    @Transactional
    public int delete(Entreprise entreprise) {
        if (entreprise.getCode() == null) return -1;

        Entreprise foundedEntreprise = findByCode(entreprise.getCode());
        if (foundedEntreprise == null) return -1;
        entrepriseDao.delete(foundedEntreprise);
        return 1;
    }


    public List<Entreprise> findByCriteria(EntrepriseVo entrepriseVo) {

        String query = "SELECT o FROM Entreprise o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", entrepriseVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", entrepriseVo.getLibelle());
        query += SearchUtil.addConstraint("o", "code", "LIKE", entrepriseVo.getCode());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<Entreprise> findSuiviByCriteria(EntrepriseVo vo) {
        return null;
    }


    @Override
    @Transactional
    public void delete(List<Entreprise> entreprises) {
        if (ListUtil.isNotEmpty(entreprises)) {
            entreprises.forEach(e -> entrepriseDao.delete(e));
        }
    }

    @Override
    public void update(List<Entreprise> entreprises) {
        if (ListUtil.isNotEmpty(entreprises)) {
            entreprises.forEach(e -> entrepriseDao.save(e));
        }
    }


}
