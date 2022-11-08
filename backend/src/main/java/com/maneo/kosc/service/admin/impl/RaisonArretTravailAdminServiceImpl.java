package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.RaisonArretTravail;
import com.maneo.kosc.dao.RaisonArretTravailDao;
import com.maneo.kosc.service.admin.facade.RaisonArretTravailAdminService;

import com.maneo.kosc.ws.rest.provided.vo.RaisonArretTravailVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class RaisonArretTravailAdminServiceImpl extends AbstractServiceImpl<RaisonArretTravail> implements RaisonArretTravailAdminService {

    @Autowired
    private RaisonArretTravailDao raisonArretTravailDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<RaisonArretTravail> findAll() {
        return raisonArretTravailDao.findAll();
    }

    @Override
    public RaisonArretTravail findByCode(String code) {
        if (code == null) return null;
        return raisonArretTravailDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String code) {
        return raisonArretTravailDao.deleteByCode(code);
    }

    @Override
    public RaisonArretTravail findByIdOrCode(RaisonArretTravail raisonArretTravail) {
        RaisonArretTravail resultat = null;
        if (raisonArretTravail != null) {
            if (StringUtil.isNotEmpty(raisonArretTravail.getId())) {
                resultat = raisonArretTravailDao.getOne(raisonArretTravail.getId());
            } else if (StringUtil.isNotEmpty(raisonArretTravail.getCode())) {
                resultat = raisonArretTravailDao.findByCode(raisonArretTravail.getCode());
            }
        }
        return resultat;
    }

    @Override
    public RaisonArretTravail findById(Long id) {
        if (id == null) return null;
        return raisonArretTravailDao.getOne(id);
    }

    @Override
    public RaisonArretTravail findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (raisonArretTravailDao.findById(id).isPresent()) {
            raisonArretTravailDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public RaisonArretTravail update(RaisonArretTravail raisonArretTravail) {
        RaisonArretTravail foundedRaisonArretTravail = findById(raisonArretTravail.getId());
        if (foundedRaisonArretTravail == null) return null;
        else {
            return raisonArretTravailDao.save(raisonArretTravail);
        }
    }

    @Override
    public RaisonArretTravail save(RaisonArretTravail raisonArretTravail) {

        RaisonArretTravail result = null;
        RaisonArretTravail foundedRaisonArretTravail = findByCode(raisonArretTravail.getCode());
        if (foundedRaisonArretTravail == null) {


            RaisonArretTravail savedRaisonArretTravail = raisonArretTravailDao.save(raisonArretTravail);

            result = savedRaisonArretTravail;
        }

        return result;
    }

    @Override
    public List<RaisonArretTravail> save(List<RaisonArretTravail> raisonArretTravails) {
        List<RaisonArretTravail> list = new ArrayList<>();
        for (RaisonArretTravail raisonArretTravail : raisonArretTravails) {
            list.add(save(raisonArretTravail));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(RaisonArretTravail raisonArretTravail) {
        if (raisonArretTravail.getCode() == null) return -1;

        RaisonArretTravail foundedRaisonArretTravail = findByCode(raisonArretTravail.getCode());
        if (foundedRaisonArretTravail == null) return -1;
        raisonArretTravailDao.delete(foundedRaisonArretTravail);
        return 1;
    }


    public List<RaisonArretTravail> findByCriteria(RaisonArretTravailVo raisonArretTravailVo) {

        String query = "SELECT o FROM RaisonArretTravail o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", raisonArretTravailVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", raisonArretTravailVo.getLibelle());
        query += SearchUtil.addConstraint("o", "code", "LIKE", raisonArretTravailVo.getCode());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<RaisonArretTravail> findSuiviByCriteria(RaisonArretTravailVo vo) {
        return null;
    }


    @Override
    @Transactional
    public void delete(List<RaisonArretTravail> raisonArretTravails) {
        if (ListUtil.isNotEmpty(raisonArretTravails)) {
            raisonArretTravails.forEach(e -> raisonArretTravailDao.delete(e));
        }
    }

    @Override
    public void update(List<RaisonArretTravail> raisonArretTravails) {
        if (ListUtil.isNotEmpty(raisonArretTravails)) {
            raisonArretTravails.forEach(e -> raisonArretTravailDao.save(e));
        }
    }


}
