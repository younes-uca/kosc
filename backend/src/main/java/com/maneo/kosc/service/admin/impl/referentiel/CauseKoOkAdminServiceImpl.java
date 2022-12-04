package com.maneo.kosc.service.admin.impl.referentiel;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.referentiel.CauseKoOk;
import com.maneo.kosc.dao.referentiel.CauseKoOkDao;
import com.maneo.kosc.service.admin.facade.referentiel.CauseKoOkAdminService;

import com.maneo.kosc.ws.rest.provided.vo.referentiel.CauseKoOkVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class CauseKoOkAdminServiceImpl extends AbstractServiceImpl<CauseKoOk> implements CauseKoOkAdminService {

    @Autowired
    private CauseKoOkDao causeKoOkDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<CauseKoOk> findAll() {
        return causeKoOkDao.findAll();
    }

    @Override
    public CauseKoOk findByCode(String code) {
        if (code == null) return null;
        return causeKoOkDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String code) {
        return causeKoOkDao.deleteByCode(code);
    }

    @Override
    public CauseKoOk findByIdOrCode(CauseKoOk causeKoOk) {
        CauseKoOk resultat = null;
        if (causeKoOk != null) {
            if (StringUtil.isNotEmpty(causeKoOk.getId())) {
                resultat = causeKoOkDao.getOne(causeKoOk.getId());
            } else if (StringUtil.isNotEmpty(causeKoOk.getCode())) {
                resultat = causeKoOkDao.findByCode(causeKoOk.getCode());
            }
        }
        return resultat;
    }

    @Override
    public CauseKoOk findById(Long id) {
        if (id == null) return null;
        return causeKoOkDao.getOne(id);
    }

    @Override
    public CauseKoOk findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (causeKoOkDao.findById(id).isPresent()) {
            causeKoOkDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public CauseKoOk update(CauseKoOk causeKoOk) {
        CauseKoOk foundedCauseKoOk = findById(causeKoOk.getId());
        if (foundedCauseKoOk == null) return null;
        else {
            return causeKoOkDao.save(causeKoOk);
        }
    }

    @Override
    public CauseKoOk save(CauseKoOk causeKoOk) {

        CauseKoOk result = null;
        CauseKoOk foundedCauseKoOk = findByCode(causeKoOk.getCode());
        if (foundedCauseKoOk == null) {


            CauseKoOk savedCauseKoOk = causeKoOkDao.save(causeKoOk);

            result = savedCauseKoOk;
        }

        return result;
    }

    @Override
    public List<CauseKoOk> save(List<CauseKoOk> causeKoOks) {
        List<CauseKoOk> list = new ArrayList<>();
        for (CauseKoOk causeKoOk : causeKoOks) {
            list.add(save(causeKoOk));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(CauseKoOk causeKoOk) {
        if (causeKoOk.getCode() == null) return -1;

        CauseKoOk foundedCauseKoOk = findByCode(causeKoOk.getCode());
        if (foundedCauseKoOk == null) return -1;
        causeKoOkDao.delete(foundedCauseKoOk);
        return 1;
    }


    public List<CauseKoOk> findByCriteria(CauseKoOkVo causeKoOkVo) {

        String query = "SELECT o FROM CauseKoOk o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", causeKoOkVo.getId());
        query += SearchUtil.addConstraint("o", "code", "LIKE", causeKoOkVo.getCode());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", causeKoOkVo.getLibelle());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    @Transactional
    public void delete(List<CauseKoOk> causeKoOks) {
        if (ListUtil.isNotEmpty(causeKoOks)) {
            causeKoOks.forEach(e -> causeKoOkDao.delete(e));
        }
    }

    @Override
    public void update(List<CauseKoOk> causeKoOks) {
        if (ListUtil.isNotEmpty(causeKoOks)) {
            causeKoOks.forEach(e -> causeKoOkDao.save(e));
        }
    }


}
