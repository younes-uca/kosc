package com.maneo.kosc.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.template.TemplateEmailMauvaisContact;
import com.maneo.kosc.dao.template.TemplateEmailMauvaisContactDao;
import com.maneo.kosc.service.chercheur.facade.TemplateEmailMauvaisContactChercheurService;

import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailMauvaisContactVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailMauvaisContactChercheurServiceImpl extends AbstractServiceImpl<TemplateEmailMauvaisContact> implements TemplateEmailMauvaisContactChercheurService {

    @Autowired
    private TemplateEmailMauvaisContactDao templateEmailMauvaisContactDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<TemplateEmailMauvaisContact> findAll() {
        return templateEmailMauvaisContactDao.findAll();
    }

    @Override
    public TemplateEmailMauvaisContact findById(Long id) {
        if (id == null) return null;
        return templateEmailMauvaisContactDao.getOne(id);
    }

    @Override
    public TemplateEmailMauvaisContact findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (templateEmailMauvaisContactDao.findById(id).isPresent()) {
            templateEmailMauvaisContactDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public TemplateEmailMauvaisContact update(TemplateEmailMauvaisContact templateEmailMauvaisContact) {
        TemplateEmailMauvaisContact foundedTemplateEmailMauvaisContact = findById(templateEmailMauvaisContact.getId());
        if (foundedTemplateEmailMauvaisContact == null) return null;
        else {
            return templateEmailMauvaisContactDao.save(templateEmailMauvaisContact);
        }
    }

    @Override
    public TemplateEmailMauvaisContact save(TemplateEmailMauvaisContact templateEmailMauvaisContact) {


        return templateEmailMauvaisContactDao.save(templateEmailMauvaisContact);


    }

    @Override
    public List<TemplateEmailMauvaisContact> save(List<TemplateEmailMauvaisContact> templateEmailMauvaisContacts) {
        List<TemplateEmailMauvaisContact> list = new ArrayList<>();
        for (TemplateEmailMauvaisContact templateEmailMauvaisContact : templateEmailMauvaisContacts) {
            list.add(save(templateEmailMauvaisContact));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(TemplateEmailMauvaisContact templateEmailMauvaisContact) {
        if (templateEmailMauvaisContact.getId() == null) return -1;
        TemplateEmailMauvaisContact foundedTemplateEmailMauvaisContact = findById(templateEmailMauvaisContact.getId());
        if (foundedTemplateEmailMauvaisContact == null) return -1;
        templateEmailMauvaisContactDao.delete(foundedTemplateEmailMauvaisContact);
        return 1;
    }


    public List<TemplateEmailMauvaisContact> findByCriteria(TemplateEmailMauvaisContactVo templateEmailMauvaisContactVo) {

        String query = "SELECT o FROM TemplateEmailMauvaisContact o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", templateEmailMauvaisContactVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", templateEmailMauvaisContactVo.getLibelle());
        query += SearchUtil.addConstraint("o", "objet", "LIKE", templateEmailMauvaisContactVo.getObjet());
        query += SearchUtil.addConstraint("o", "corps", "LIKE", templateEmailMauvaisContactVo.getCorps());
        return entityManager.createQuery(query).getResultList();
    }


    @Override
    @Transactional
    public void delete(List<TemplateEmailMauvaisContact> templateEmailMauvaisContacts) {
        if (ListUtil.isNotEmpty(templateEmailMauvaisContacts)) {
            templateEmailMauvaisContacts.forEach(e -> templateEmailMauvaisContactDao.delete(e));
        }
    }

    @Override
    public void update(List<TemplateEmailMauvaisContact> templateEmailMauvaisContacts) {
        if (ListUtil.isNotEmpty(templateEmailMauvaisContacts)) {
            templateEmailMauvaisContacts.forEach(e -> templateEmailMauvaisContactDao.save(e));
        }
    }


}
