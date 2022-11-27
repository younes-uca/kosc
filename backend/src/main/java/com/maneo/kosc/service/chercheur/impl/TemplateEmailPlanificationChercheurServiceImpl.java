package com.maneo.kosc.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.TemplateEmailPlanification;
import com.maneo.kosc.dao.TemplateEmailPlanificationDao;
import com.maneo.kosc.service.chercheur.facade.TemplateEmailPlanificationChercheurService;

import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailPlanificationVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailPlanificationChercheurServiceImpl extends AbstractServiceImpl<TemplateEmailPlanification> implements TemplateEmailPlanificationChercheurService {

    @Autowired
    private TemplateEmailPlanificationDao templateEmailPlanificationDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<TemplateEmailPlanification> findAll() {
        return templateEmailPlanificationDao.findAll();
    }

    @Override
    public TemplateEmailPlanification findById(Long id) {
        if (id == null) return null;
        return templateEmailPlanificationDao.getOne(id);
    }

    @Override
    public TemplateEmailPlanification findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (templateEmailPlanificationDao.findById(id).isPresent()) {
            templateEmailPlanificationDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public TemplateEmailPlanification update(TemplateEmailPlanification templateEmailPlanification) {
        TemplateEmailPlanification foundedTemplateEmailPlanification = findById(templateEmailPlanification.getId());
        if (foundedTemplateEmailPlanification == null) return null;
        else {
            return templateEmailPlanificationDao.save(templateEmailPlanification);
        }
    }

    @Override
    public TemplateEmailPlanification save(TemplateEmailPlanification templateEmailPlanification) {


        return templateEmailPlanificationDao.save(templateEmailPlanification);


    }

    @Override
    public List<TemplateEmailPlanification> save(List<TemplateEmailPlanification> templateEmailPlanifications) {
        List<TemplateEmailPlanification> list = new ArrayList<>();
        for (TemplateEmailPlanification templateEmailPlanification : templateEmailPlanifications) {
            list.add(save(templateEmailPlanification));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(TemplateEmailPlanification templateEmailPlanification) {
        if (templateEmailPlanification.getId() == null) return -1;
        TemplateEmailPlanification foundedTemplateEmailPlanification = findById(templateEmailPlanification.getId());
        if (foundedTemplateEmailPlanification == null) return -1;
        templateEmailPlanificationDao.delete(foundedTemplateEmailPlanification);
        return 1;
    }


    public List<TemplateEmailPlanification> findByCriteria(TemplateEmailPlanificationVo templateEmailPlanificationVo) {

        String query = "SELECT o FROM TemplateEmailPlanification o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", templateEmailPlanificationVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", templateEmailPlanificationVo.getLibelle());
        query += SearchUtil.addConstraint("o", "objet", "LIKE", templateEmailPlanificationVo.getObjet());
        query += SearchUtil.addConstraint("o", "corps", "LIKE", templateEmailPlanificationVo.getCorps());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    @Transactional
    public void delete(List<TemplateEmailPlanification> templateEmailPlanifications) {
        if (ListUtil.isNotEmpty(templateEmailPlanifications)) {
            templateEmailPlanifications.forEach(e -> templateEmailPlanificationDao.delete(e));
        }
    }

    @Override
    public void update(List<TemplateEmailPlanification> templateEmailPlanifications) {
        if (ListUtil.isNotEmpty(templateEmailPlanifications)) {
            templateEmailPlanifications.forEach(e -> templateEmailPlanificationDao.save(e));
        }
    }


}
