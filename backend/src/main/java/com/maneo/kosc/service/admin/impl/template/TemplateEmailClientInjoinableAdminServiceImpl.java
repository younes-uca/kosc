package com.maneo.kosc.service.admin.impl.template;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.template.TemplateEmailClientInjoinable;
import com.maneo.kosc.dao.template.TemplateEmailClientInjoinableDao;
import com.maneo.kosc.service.admin.facade.template.TemplateEmailClientInjoinableAdminService;

import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailClientInjoinableVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailClientInjoinableAdminServiceImpl extends AbstractServiceImpl<TemplateEmailClientInjoinable> implements TemplateEmailClientInjoinableAdminService {

    @Autowired
    private TemplateEmailClientInjoinableDao templateEmailClientInjoinableDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<TemplateEmailClientInjoinable> findAll() {
        return templateEmailClientInjoinableDao.findAll();
    }

    @Override
    public TemplateEmailClientInjoinable findById(Long id) {
        if (id == null) return null;
        return templateEmailClientInjoinableDao.getOne(id);
    }

    @Override
    public TemplateEmailClientInjoinable findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (templateEmailClientInjoinableDao.findById(id).isPresent()) {
            templateEmailClientInjoinableDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public TemplateEmailClientInjoinable update(TemplateEmailClientInjoinable templateEmailClientInjoinable) {
        TemplateEmailClientInjoinable foundedTemplateEmailClientInjoinable = findById(templateEmailClientInjoinable.getId());
        if (foundedTemplateEmailClientInjoinable == null) return null;
        else {
            return templateEmailClientInjoinableDao.save(templateEmailClientInjoinable);
        }
    }

    @Override
    public TemplateEmailClientInjoinable save(TemplateEmailClientInjoinable templateEmailClientInjoinable) {


        return templateEmailClientInjoinableDao.save(templateEmailClientInjoinable);


    }

    @Override
    public List<TemplateEmailClientInjoinable> save(List<TemplateEmailClientInjoinable> templateEmailClientInjoinables) {
        List<TemplateEmailClientInjoinable> list = new ArrayList<>();
        for (TemplateEmailClientInjoinable templateEmailClientInjoinable : templateEmailClientInjoinables) {
            list.add(save(templateEmailClientInjoinable));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(TemplateEmailClientInjoinable templateEmailClientInjoinable) {
        if (templateEmailClientInjoinable.getId() == null) return -1;
        TemplateEmailClientInjoinable foundedTemplateEmailClientInjoinable = findById(templateEmailClientInjoinable.getId());
        if (foundedTemplateEmailClientInjoinable == null) return -1;
        templateEmailClientInjoinableDao.delete(foundedTemplateEmailClientInjoinable);
        return 1;
    }


    public List<TemplateEmailClientInjoinable> findByCriteria(TemplateEmailClientInjoinableVo templateEmailClientInjoinableVo) {

        String query = "SELECT o FROM TemplateEmailClientInjoinable o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", templateEmailClientInjoinableVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", templateEmailClientInjoinableVo.getLibelle());
        query += SearchUtil.addConstraint("o", "objet", "LIKE", templateEmailClientInjoinableVo.getObjet());
        query += SearchUtil.addConstraint("o", "corps", "LIKE", templateEmailClientInjoinableVo.getCorps());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    @Transactional
    public void delete(List<TemplateEmailClientInjoinable> templateEmailClientInjoinables) {
        if (ListUtil.isNotEmpty(templateEmailClientInjoinables)) {
            templateEmailClientInjoinables.forEach(e -> templateEmailClientInjoinableDao.delete(e));
        }
    }

    @Override
    public void update(List<TemplateEmailClientInjoinable> templateEmailClientInjoinables) {
        if (ListUtil.isNotEmpty(templateEmailClientInjoinables)) {
            templateEmailClientInjoinables.forEach(e -> templateEmailClientInjoinableDao.save(e));
        }
    }


}
