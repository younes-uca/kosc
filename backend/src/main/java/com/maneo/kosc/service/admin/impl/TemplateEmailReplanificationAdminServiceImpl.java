package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.template.TemplateEmailReplanification;
import com.maneo.kosc.dao.TemplateEmailReplanificationDao;
import com.maneo.kosc.service.admin.facade.TemplateEmailReplanificationAdminService;

import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReplanificationVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailReplanificationAdminServiceImpl extends AbstractServiceImpl<TemplateEmailReplanification> implements TemplateEmailReplanificationAdminService {

    @Autowired
    private TemplateEmailReplanificationDao templateEmailReplanificationDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<TemplateEmailReplanification> findAll() {
        return templateEmailReplanificationDao.findAll();
    }

    @Override
    public TemplateEmailReplanification findById(Long id) {
        if (id == null) return null;
        return templateEmailReplanificationDao.getOne(id);
    }

    @Override
    public TemplateEmailReplanification findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (templateEmailReplanificationDao.findById(id).isPresent()) {
            templateEmailReplanificationDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public TemplateEmailReplanification update(TemplateEmailReplanification templateEmailReplanification) {
        TemplateEmailReplanification foundedTemplateEmailReplanification = findById(templateEmailReplanification.getId());
        if (foundedTemplateEmailReplanification == null) return null;
        else {
            return templateEmailReplanificationDao.save(templateEmailReplanification);
        }
    }

    @Override
    public TemplateEmailReplanification save(TemplateEmailReplanification templateEmailReplanification) {


        return templateEmailReplanificationDao.save(templateEmailReplanification);


    }

    @Override
    public List<TemplateEmailReplanification> save(List<TemplateEmailReplanification> templateEmailReplanifications) {
        List<TemplateEmailReplanification> list = new ArrayList<>();
        for (TemplateEmailReplanification templateEmailReplanification : templateEmailReplanifications) {
            list.add(save(templateEmailReplanification));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(TemplateEmailReplanification templateEmailReplanification) {
        if (templateEmailReplanification.getId() == null) return -1;
        TemplateEmailReplanification foundedTemplateEmailReplanification = findById(templateEmailReplanification.getId());
        if (foundedTemplateEmailReplanification == null) return -1;
        templateEmailReplanificationDao.delete(foundedTemplateEmailReplanification);
        return 1;
    }


    public List<TemplateEmailReplanification> findByCriteria(TemplateEmailReplanificationVo templateEmailReplanificationVo) {

        String query = "SELECT o FROM TemplateEmailReplanification o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", templateEmailReplanificationVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", templateEmailReplanificationVo.getLibelle());
        query += SearchUtil.addConstraint("o", "objet", "LIKE", templateEmailReplanificationVo.getObjet());
        query += SearchUtil.addConstraint("o", "corps", "LIKE", templateEmailReplanificationVo.getCorps());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    @Transactional
    public void delete(List<TemplateEmailReplanification> templateEmailReplanifications) {
        if (ListUtil.isNotEmpty(templateEmailReplanifications)) {
            templateEmailReplanifications.forEach(e -> templateEmailReplanificationDao.delete(e));
        }
    }

    @Override
    public void update(List<TemplateEmailReplanification> templateEmailReplanifications) {
        if (ListUtil.isNotEmpty(templateEmailReplanifications)) {
            templateEmailReplanifications.forEach(e -> templateEmailReplanificationDao.save(e));
        }
    }


}
