package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.TemplateEmailClientInjoinableKosc;
import com.maneo.kosc.dao.TemplateEmailClientInjoinableKoscDao;
import com.maneo.kosc.service.admin.facade.TemplateEmailClientInjoinableKoscAdminService;

import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailClientInjoinableKoscVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailClientInjoinableKoscAdminServiceImpl extends AbstractServiceImpl<TemplateEmailClientInjoinableKosc> implements TemplateEmailClientInjoinableKoscAdminService {

    @Autowired
    private TemplateEmailClientInjoinableKoscDao templateEmailClientInjoinableKoscDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<TemplateEmailClientInjoinableKosc> findAll() {
        return templateEmailClientInjoinableKoscDao.findAll();
    }

    @Override
    public TemplateEmailClientInjoinableKosc findById(Long id) {
        if (id == null) return null;
        return templateEmailClientInjoinableKoscDao.getOne(id);
    }

    @Override
    public TemplateEmailClientInjoinableKosc findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (templateEmailClientInjoinableKoscDao.findById(id).isPresent()) {
            templateEmailClientInjoinableKoscDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public TemplateEmailClientInjoinableKosc update(TemplateEmailClientInjoinableKosc templateEmailClientInjoinableKosc) {
        TemplateEmailClientInjoinableKosc foundedTemplateEmailClientInjoinableKosc = findById(templateEmailClientInjoinableKosc.getId());
        if (foundedTemplateEmailClientInjoinableKosc == null) return null;
        else {
            return templateEmailClientInjoinableKoscDao.save(templateEmailClientInjoinableKosc);
        }
    }

    @Override
    public TemplateEmailClientInjoinableKosc save(TemplateEmailClientInjoinableKosc templateEmailClientInjoinableKosc) {


        return templateEmailClientInjoinableKoscDao.save(templateEmailClientInjoinableKosc);


    }

    @Override
    public List<TemplateEmailClientInjoinableKosc> save(List<TemplateEmailClientInjoinableKosc> templateEmailClientInjoinableKoscs) {
        List<TemplateEmailClientInjoinableKosc> list = new ArrayList<>();
        for (TemplateEmailClientInjoinableKosc templateEmailClientInjoinableKosc : templateEmailClientInjoinableKoscs) {
            list.add(save(templateEmailClientInjoinableKosc));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(TemplateEmailClientInjoinableKosc templateEmailClientInjoinableKosc) {
        if (templateEmailClientInjoinableKosc.getId() == null) return -1;
        TemplateEmailClientInjoinableKosc foundedTemplateEmailClientInjoinableKosc = findById(templateEmailClientInjoinableKosc.getId());
        if (foundedTemplateEmailClientInjoinableKosc == null) return -1;
        templateEmailClientInjoinableKoscDao.delete(foundedTemplateEmailClientInjoinableKosc);
        return 1;
    }


    public List<TemplateEmailClientInjoinableKosc> findByCriteria(TemplateEmailClientInjoinableKoscVo templateEmailClientInjoinableKoscVo) {

        String query = "SELECT o FROM TemplateEmailClientInjoinableKosc o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", templateEmailClientInjoinableKoscVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", templateEmailClientInjoinableKoscVo.getLibelle());
        query += SearchUtil.addConstraint("o", "objet", "LIKE", templateEmailClientInjoinableKoscVo.getObjet());
        query += SearchUtil.addConstraint("o", "corps", "LIKE", templateEmailClientInjoinableKoscVo.getCorps());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<TemplateEmailClientInjoinableKosc> findSuiviByCriteria(TemplateEmailClientInjoinableKoscVo vo) {
        return null;
    }


    @Override
    @Transactional
    public void delete(List<TemplateEmailClientInjoinableKosc> templateEmailClientInjoinableKoscs) {
        if (ListUtil.isNotEmpty(templateEmailClientInjoinableKoscs)) {
            templateEmailClientInjoinableKoscs.forEach(e -> templateEmailClientInjoinableKoscDao.delete(e));
        }
    }

    @Override
    public void update(List<TemplateEmailClientInjoinableKosc> templateEmailClientInjoinableKoscs) {
        if (ListUtil.isNotEmpty(templateEmailClientInjoinableKoscs)) {
            templateEmailClientInjoinableKoscs.forEach(e -> templateEmailClientInjoinableKoscDao.save(e));
        }
    }


}
