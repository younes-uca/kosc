package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.template.TemplateEmailCri;
import com.maneo.kosc.dao.template.TemplateEmailCriDao;
import com.maneo.kosc.service.admin.facade.TemplateEmailCriAdminService;

import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailCriVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailCriAdminServiceImpl extends AbstractServiceImpl<TemplateEmailCri> implements TemplateEmailCriAdminService {

    @Autowired
    private TemplateEmailCriDao templateEmailCriDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<TemplateEmailCri> findAll() {
        return templateEmailCriDao.findAll();
    }

    @Override
    public TemplateEmailCri findById(Long id) {
        if (id == null) return null;
        return templateEmailCriDao.getOne(id);
    }

    @Override
    public TemplateEmailCri findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (templateEmailCriDao.findById(id).isPresent()) {
            templateEmailCriDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public TemplateEmailCri update(TemplateEmailCri templateEmailCri) {
        TemplateEmailCri foundedTemplateEmailCri = findById(templateEmailCri.getId());
        if (foundedTemplateEmailCri == null) return null;
        else {
            return templateEmailCriDao.save(templateEmailCri);
        }
    }

    @Override
    public TemplateEmailCri save(TemplateEmailCri templateEmailCri) {


        return templateEmailCriDao.save(templateEmailCri);


    }

    @Override
    public List<TemplateEmailCri> save(List<TemplateEmailCri> templateEmailCris) {
        List<TemplateEmailCri> list = new ArrayList<>();
        for (TemplateEmailCri templateEmailCri : templateEmailCris) {
            list.add(save(templateEmailCri));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(TemplateEmailCri templateEmailCri) {
        if (templateEmailCri.getId() == null) return -1;
        TemplateEmailCri foundedTemplateEmailCri = findById(templateEmailCri.getId());
        if (foundedTemplateEmailCri == null) return -1;
        templateEmailCriDao.delete(foundedTemplateEmailCri);
        return 1;
    }


    public List<TemplateEmailCri> findByCriteria(TemplateEmailCriVo templateEmailCriVo) {

        String query = "SELECT o FROM TemplateEmailCri o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", templateEmailCriVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", templateEmailCriVo.getLibelle());
        query += SearchUtil.addConstraint("o", "objet", "LIKE", templateEmailCriVo.getObjet());
        query += SearchUtil.addConstraint("o", "corps", "LIKE", templateEmailCriVo.getCorps());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    @Transactional
    public void delete(List<TemplateEmailCri> templateEmailCris) {
        if (ListUtil.isNotEmpty(templateEmailCris)) {
            templateEmailCris.forEach(e -> templateEmailCriDao.delete(e));
        }
    }

    @Override
    public void update(List<TemplateEmailCri> templateEmailCris) {
        if (ListUtil.isNotEmpty(templateEmailCris)) {
            templateEmailCris.forEach(e -> templateEmailCriDao.save(e));
        }
    }


}
