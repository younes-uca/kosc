package com.maneo.kosc.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.SourceReplanification;
import com.maneo.kosc.dao.SourceReplanificationDao;
import com.maneo.kosc.service.chercheur.facade.SourceReplanificationChercheurService;

import com.maneo.kosc.ws.rest.provided.vo.SourceReplanificationVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class SourceReplanificationChercheurServiceImpl extends AbstractServiceImpl<SourceReplanification> implements SourceReplanificationChercheurService {

    @Autowired
    private SourceReplanificationDao sourceReplanificationDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<SourceReplanification> findAll() {
        return sourceReplanificationDao.findAll();
    }

    @Override
    public SourceReplanification findByCode(String code) {
        if (code == null) return null;
        return sourceReplanificationDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String code) {
        return sourceReplanificationDao.deleteByCode(code);
    }

    @Override
    public SourceReplanification findByIdOrCode(SourceReplanification sourceReplanification) {
        SourceReplanification resultat = null;
        if (sourceReplanification != null) {
            if (StringUtil.isNotEmpty(sourceReplanification.getId())) {
                resultat = sourceReplanificationDao.getOne(sourceReplanification.getId());
            } else if (StringUtil.isNotEmpty(sourceReplanification.getCode())) {
                resultat = sourceReplanificationDao.findByCode(sourceReplanification.getCode());
            }
        }
        return resultat;
    }

    @Override
    public SourceReplanification findById(Long id) {
        if (id == null) return null;
        return sourceReplanificationDao.getOne(id);
    }

    @Override
    public SourceReplanification findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (sourceReplanificationDao.findById(id).isPresent()) {
            sourceReplanificationDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public SourceReplanification update(SourceReplanification sourceReplanification) {
        SourceReplanification foundedSourceReplanification = findById(sourceReplanification.getId());
        if (foundedSourceReplanification == null) return null;
        else {
            return sourceReplanificationDao.save(sourceReplanification);
        }
    }

    @Override
    public SourceReplanification save(SourceReplanification sourceReplanification) {

        SourceReplanification result = null;
        SourceReplanification foundedSourceReplanification = findByCode(sourceReplanification.getCode());
        if (foundedSourceReplanification == null) {


            SourceReplanification savedSourceReplanification = sourceReplanificationDao.save(sourceReplanification);

            result = savedSourceReplanification;
        }

        return result;
    }

    @Override
    public List<SourceReplanification> save(List<SourceReplanification> sourceReplanifications) {
        List<SourceReplanification> list = new ArrayList<>();
        for (SourceReplanification sourceReplanification : sourceReplanifications) {
            list.add(save(sourceReplanification));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(SourceReplanification sourceReplanification) {
        if (sourceReplanification.getCode() == null) return -1;

        SourceReplanification foundedSourceReplanification = findByCode(sourceReplanification.getCode());
        if (foundedSourceReplanification == null) return -1;
        sourceReplanificationDao.delete(foundedSourceReplanification);
        return 1;
    }


    public List<SourceReplanification> findByCriteria(SourceReplanificationVo sourceReplanificationVo) {

        String query = "SELECT o FROM SourceReplanification o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", sourceReplanificationVo.getId());
        query += SearchUtil.addConstraint("o", "code", "LIKE", sourceReplanificationVo.getCode());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", sourceReplanificationVo.getLibelle());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<SourceReplanification> findSuiviByCriteria(SourceReplanificationVo vo) {
        return null;
    }


    @Override
    @Transactional
    public void delete(List<SourceReplanification> sourceReplanifications) {
        if (ListUtil.isNotEmpty(sourceReplanifications)) {
            sourceReplanifications.forEach(e -> sourceReplanificationDao.delete(e));
        }
    }

    @Override
    public void update(List<SourceReplanification> sourceReplanifications) {
        if (ListUtil.isNotEmpty(sourceReplanifications)) {
            sourceReplanifications.forEach(e -> sourceReplanificationDao.save(e));
        }
    }


}
