package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.TemplateEmailRefus;
import com.maneo.kosc.dao.TemplateEmailRefusDao;
import com.maneo.kosc.service.admin.facade.TemplateEmailRefusAdminService;

import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailRefusVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailRefusAdminServiceImpl extends AbstractServiceImpl<TemplateEmailRefus> implements TemplateEmailRefusAdminService {

    @Autowired
    private TemplateEmailRefusDao templateEmailRefusDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<TemplateEmailRefus> findAll() {
        return templateEmailRefusDao.findAll();
    }

    @Override
    public TemplateEmailRefus findById(Long id) {
        if (id == null) return null;
        return templateEmailRefusDao.getOne(id);
    }

    @Override
    public TemplateEmailRefus findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (templateEmailRefusDao.findById(id).isPresent()) {
            templateEmailRefusDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public TemplateEmailRefus update(TemplateEmailRefus templateEmailRefus) {
        TemplateEmailRefus foundedTemplateEmailRefus = findById(templateEmailRefus.getId());
        if (foundedTemplateEmailRefus == null) return null;
        else {
            return templateEmailRefusDao.save(templateEmailRefus);
        }
    }

    @Override
    public TemplateEmailRefus save(TemplateEmailRefus templateEmailRefus) {


        return templateEmailRefusDao.save(templateEmailRefus);


    }

    @Override
    public List<TemplateEmailRefus> save(List<TemplateEmailRefus> templateEmailRefuss) {
        List<TemplateEmailRefus> list = new ArrayList<>();
        for (TemplateEmailRefus templateEmailRefus : templateEmailRefuss) {
            list.add(save(templateEmailRefus));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(TemplateEmailRefus templateEmailRefus) {
        if (templateEmailRefus.getId() == null) return -1;
        TemplateEmailRefus foundedTemplateEmailRefus = findById(templateEmailRefus.getId());
        if (foundedTemplateEmailRefus == null) return -1;
        templateEmailRefusDao.delete(foundedTemplateEmailRefus);
        return 1;
    }


    public List<TemplateEmailRefus> findByCriteria(TemplateEmailRefusVo templateEmailRefusVo) {

        String query = "SELECT o FROM TemplateEmailRefus o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", templateEmailRefusVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", templateEmailRefusVo.getLibelle());
        query += SearchUtil.addConstraint("o", "objet", "LIKE", templateEmailRefusVo.getObjet());
        query += SearchUtil.addConstraint("o", "corps", "LIKE", templateEmailRefusVo.getCorps());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    @Transactional
    public void delete(List<TemplateEmailRefus> templateEmailRefuss) {
        if (ListUtil.isNotEmpty(templateEmailRefuss)) {
            templateEmailRefuss.forEach(e -> templateEmailRefusDao.delete(e));
        }
    }

    @Override
    public void update(List<TemplateEmailRefus> templateEmailRefuss) {
        if (ListUtil.isNotEmpty(templateEmailRefuss)) {
            templateEmailRefuss.forEach(e -> templateEmailRefusDao.save(e));
        }
    }


}
