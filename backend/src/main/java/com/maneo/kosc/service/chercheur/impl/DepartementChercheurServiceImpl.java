package com.maneo.kosc.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.Departement;
import com.maneo.kosc.bean.Region;
import com.maneo.kosc.dao.DepartementDao;
import com.maneo.kosc.service.chercheur.facade.DepartementChercheurService;
import com.maneo.kosc.service.chercheur.facade.RegionChercheurService;

import com.maneo.kosc.ws.rest.provided.vo.DepartementVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class DepartementChercheurServiceImpl extends AbstractServiceImpl<Departement> implements DepartementChercheurService {

    @Autowired
    private DepartementDao departementDao;

    @Autowired
    private RegionChercheurService regionService;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<Departement> findAll() {
        return departementDao.findAll();
    }

    @Override
    public List<Departement> findByRegionCode(String code) {
        return departementDao.findByRegionCode(code);
    }

    @Override
    @Transactional
    public int deleteByRegionCode(String code) {
        return departementDao.deleteByRegionCode(code);
    }

    @Override
    public List<Departement> findByRegionId(Long id) {
        return departementDao.findByRegionId(id);
    }

    @Override
    @Transactional
    public int deleteByRegionId(Long id) {
        return departementDao.deleteByRegionId(id);
    }

    @Override
    public Departement findByCode(String code) {
        if (code == null) return null;
        return departementDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String code) {
        return departementDao.deleteByCode(code);
    }

    @Override
    public Departement findByIdOrCode(Departement departement) {
        Departement resultat = null;
        if (departement != null) {
            if (StringUtil.isNotEmpty(departement.getId())) {
                resultat = departementDao.getOne(departement.getId());
            } else if (StringUtil.isNotEmpty(departement.getCode())) {
                resultat = departementDao.findByCode(departement.getCode());
            }
        }
        return resultat;
    }

    @Override
    public Departement findById(Long id) {
        if (id == null) return null;
        return departementDao.getOne(id);
    }

    @Override
    public Departement findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (departementDao.findById(id).isPresent()) {
            departementDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public Departement update(Departement departement) {
        Departement foundedDepartement = findById(departement.getId());
        if (foundedDepartement == null) return null;
        else {
            return departementDao.save(departement);
        }
    }

    @Override
    public Departement save(Departement departement) {

        Departement result = null;
        Departement foundedDepartement = findByCode(departement.getCode());
        if (foundedDepartement == null) {


            findRegion(departement);

            Departement savedDepartement = departementDao.save(departement);

            result = savedDepartement;
        }

        return result;
    }

    @Override
    public List<Departement> save(List<Departement> departements) {
        List<Departement> list = new ArrayList<>();
        for (Departement departement : departements) {
            list.add(save(departement));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(Departement departement) {
        if (departement.getCode() == null) return -1;

        Departement foundedDepartement = findByCode(departement.getCode());
        if (foundedDepartement == null) return -1;
        departementDao.delete(foundedDepartement);
        return 1;
    }


    public List<Departement> findByCriteria(DepartementVo departementVo) {

        String query = "SELECT o FROM Departement o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", departementVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", departementVo.getLibelle());
        query += SearchUtil.addConstraint("o", "code", "LIKE", departementVo.getCode());
        if (departementVo.getRegionVo() != null) {
            query += SearchUtil.addConstraint("o", "region.id", "=", departementVo.getRegionVo().getId());
            query += SearchUtil.addConstraint("o", "region.code", "LIKE", departementVo.getRegionVo().getCode());
        }

        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<Departement> findSuiviByCriteria(DepartementVo vo) {
        return null;
    }

    private void findRegion(Departement departement) {
        Region loadedRegion = regionService.findByIdOrCode(departement.getRegion());

        if (loadedRegion == null) {
            return;
        }
        departement.setRegion(loadedRegion);
    }

    @Override
    @Transactional
    public void delete(List<Departement> departements) {
        if (ListUtil.isNotEmpty(departements)) {
            departements.forEach(e -> departementDao.delete(e));
        }
    }

    @Override
    public void update(List<Departement> departements) {
        if (ListUtil.isNotEmpty(departements)) {
            departements.forEach(e -> departementDao.save(e));
        }
    }

    private void createRegion(Departement departement) {
        Region loadedRegion = regionService.findByIdOrCode(departement.getRegion());

        if (loadedRegion == null) {
            loadedRegion = regionService.save(new Region());
        }
        departement.setRegion(loadedRegion);
    }

}
