package com.maneo.kosc.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.template.TemplateEmailCloture;
import com.maneo.kosc.dao.template.TemplateEmailClotureDao;
import com.maneo.kosc.service.chercheur.facade.TemplateEmailClotureChercheurService;

import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailClotureVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailClotureChercheurServiceImpl extends AbstractServiceImpl<TemplateEmailCloture> implements TemplateEmailClotureChercheurService {

    @Autowired
    private TemplateEmailClotureDao templateEmailClotureDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<TemplateEmailCloture> findAll() {
        return templateEmailClotureDao.findAll();
    }

    @Override
    public TemplateEmailCloture findById(Long id) {
        if (id == null) return null;
        return templateEmailClotureDao.getOne(id);
    }

    @Override
    public TemplateEmailCloture findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (templateEmailClotureDao.findById(id).isPresent()) {
            templateEmailClotureDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public TemplateEmailCloture update(TemplateEmailCloture templateEmailCloture) {
        TemplateEmailCloture foundedTemplateEmailCloture = findById(templateEmailCloture.getId());
        if (foundedTemplateEmailCloture == null) return null;
        else {
            return templateEmailClotureDao.save(templateEmailCloture);
        }
    }

    @Override
    public TemplateEmailCloture save(TemplateEmailCloture templateEmailCloture) {


        return templateEmailClotureDao.save(templateEmailCloture);


    }

    @Override
    public List<TemplateEmailCloture> save(List<TemplateEmailCloture> templateEmailClotures) {
        List<TemplateEmailCloture> list = new ArrayList<>();
        for (TemplateEmailCloture templateEmailCloture : templateEmailClotures) {
            list.add(save(templateEmailCloture));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(TemplateEmailCloture templateEmailCloture) {
        if (templateEmailCloture.getId() == null) return -1;
        TemplateEmailCloture foundedTemplateEmailCloture = findById(templateEmailCloture.getId());
        if (foundedTemplateEmailCloture == null) return -1;
        templateEmailClotureDao.delete(foundedTemplateEmailCloture);
        return 1;
    }


    public List<TemplateEmailCloture> findByCriteria(TemplateEmailClotureVo templateEmailClotureVo) {

        String query = "SELECT o FROM TemplateEmailCloture o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", templateEmailClotureVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", templateEmailClotureVo.getLibelle());
        query += SearchUtil.addConstraint("o", "objet", "LIKE", templateEmailClotureVo.getObjet());
        query += SearchUtil.addConstraint("o", "corps", "LIKE", templateEmailClotureVo.getCorps());
        return entityManager.createQuery(query).getResultList();
    }


    @Override
    @Transactional
    public void delete(List<TemplateEmailCloture> templateEmailClotures) {
        if (ListUtil.isNotEmpty(templateEmailClotures)) {
            templateEmailClotures.forEach(e -> templateEmailClotureDao.delete(e));
        }
    }

    @Override
    public void update(List<TemplateEmailCloture> templateEmailClotures) {
        if (ListUtil.isNotEmpty(templateEmailClotures)) {
            templateEmailClotures.forEach(e -> templateEmailClotureDao.save(e));
        }
    }


}
