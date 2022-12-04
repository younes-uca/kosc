package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.template.TemplateEmailFtl;
import com.maneo.kosc.dao.TemplateEmailFtlDao;
import com.maneo.kosc.service.admin.facade.TemplateEmailFtlAdminService;

import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailFtlVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailFtlAdminServiceImpl extends AbstractServiceImpl<TemplateEmailFtl> implements TemplateEmailFtlAdminService {

    @Autowired
    private TemplateEmailFtlDao templateEmailFtlDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<TemplateEmailFtl> findAll() {
        return templateEmailFtlDao.findAll();
    }

    @Override
    public TemplateEmailFtl findById(Long id) {
        if (id == null) return null;
        return templateEmailFtlDao.getOne(id);
    }

    @Override
    public TemplateEmailFtl findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (templateEmailFtlDao.findById(id).isPresent()) {
            templateEmailFtlDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public TemplateEmailFtl update(TemplateEmailFtl templateEmailFtl) {
        TemplateEmailFtl foundedTemplateEmailFtl = findById(templateEmailFtl.getId());
        if (foundedTemplateEmailFtl == null) return null;
        else {
            return templateEmailFtlDao.save(templateEmailFtl);
        }
    }

    @Override
    public TemplateEmailFtl save(TemplateEmailFtl templateEmailFtl) {


        return templateEmailFtlDao.save(templateEmailFtl);


    }

    @Override
    public List<TemplateEmailFtl> save(List<TemplateEmailFtl> templateEmailFtls) {
        List<TemplateEmailFtl> list = new ArrayList<>();
        for (TemplateEmailFtl templateEmailFtl : templateEmailFtls) {
            list.add(save(templateEmailFtl));
        }
        return list;
    }



    @Override
    @Transactional
    public int delete(TemplateEmailFtl templateEmailFtl) {
        if (templateEmailFtl.getId() == null) return -1;
        TemplateEmailFtl foundedTemplateEmailFtl = findById(templateEmailFtl.getId());
        if (foundedTemplateEmailFtl == null) return -1;
        templateEmailFtlDao.delete(foundedTemplateEmailFtl);
        return 1;
    }


    public List<TemplateEmailFtl> findByCriteria(TemplateEmailFtlVo templateEmailFtlVo) {

        String query = "SELECT o FROM TemplateEmailFtl o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", templateEmailFtlVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", templateEmailFtlVo.getLibelle());
        query += SearchUtil.addConstraint("o", "objet", "LIKE", templateEmailFtlVo.getObjet());
        query += SearchUtil.addConstraint("o", "corps", "LIKE", templateEmailFtlVo.getCorps());
        return entityManager.createQuery(query).getResultList();
    }


    @Override
    @Transactional
    public void delete(List<TemplateEmailFtl> templateEmailFtls) {
        if (ListUtil.isNotEmpty(templateEmailFtls)) {
            templateEmailFtls.forEach(e -> templateEmailFtlDao.delete(e));
        }
    }

    @Override
    public void update(List<TemplateEmailFtl> templateEmailFtls) {
        if (ListUtil.isNotEmpty(templateEmailFtls)) {
            templateEmailFtls.forEach(e -> templateEmailFtlDao.save(e));
        }
    }


}
