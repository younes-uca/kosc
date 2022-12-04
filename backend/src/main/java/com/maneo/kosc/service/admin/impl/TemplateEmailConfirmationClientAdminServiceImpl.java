package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.template.TemplateEmailConfirmationClient;
import com.maneo.kosc.dao.template.TemplateEmailConfirmationClientDao;
import com.maneo.kosc.service.admin.facade.TemplateEmailConfirmationClientAdminService;

import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailConfirmationClientVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailConfirmationClientAdminServiceImpl extends AbstractServiceImpl<TemplateEmailConfirmationClient> implements TemplateEmailConfirmationClientAdminService {

    @Autowired
    private TemplateEmailConfirmationClientDao templateEmailConfirmationClientDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<TemplateEmailConfirmationClient> findAll() {
        return templateEmailConfirmationClientDao.findAll();
    }

    @Override
    public TemplateEmailConfirmationClient findById(Long id) {
        if (id == null) return null;
        return templateEmailConfirmationClientDao.getOne(id);
    }

    @Override
    public TemplateEmailConfirmationClient findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (templateEmailConfirmationClientDao.findById(id).isPresent()) {
            templateEmailConfirmationClientDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public TemplateEmailConfirmationClient update(TemplateEmailConfirmationClient templateEmailConfirmationClient) {
        TemplateEmailConfirmationClient foundedTemplateEmailConfirmationClient = findById(templateEmailConfirmationClient.getId());
        if (foundedTemplateEmailConfirmationClient == null) return null;
        else {
            return templateEmailConfirmationClientDao.save(templateEmailConfirmationClient);
        }
    }

    @Override
    public TemplateEmailConfirmationClient save(TemplateEmailConfirmationClient templateEmailConfirmationClient) {


        return templateEmailConfirmationClientDao.save(templateEmailConfirmationClient);


    }

    @Override
    public List<TemplateEmailConfirmationClient> save(List<TemplateEmailConfirmationClient> templateEmailConfirmationClients) {
        List<TemplateEmailConfirmationClient> list = new ArrayList<>();
        for (TemplateEmailConfirmationClient templateEmailConfirmationClient : templateEmailConfirmationClients) {
            list.add(save(templateEmailConfirmationClient));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(TemplateEmailConfirmationClient templateEmailConfirmationClient) {
        if (templateEmailConfirmationClient.getId() == null) return -1;
        TemplateEmailConfirmationClient foundedTemplateEmailConfirmationClient = findById(templateEmailConfirmationClient.getId());
        if (foundedTemplateEmailConfirmationClient == null) return -1;
        templateEmailConfirmationClientDao.delete(foundedTemplateEmailConfirmationClient);
        return 1;
    }


    public List<TemplateEmailConfirmationClient> findByCriteria(TemplateEmailConfirmationClientVo templateEmailConfirmationClientVo) {

        String query = "SELECT o FROM TemplateEmailConfirmationClient o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", templateEmailConfirmationClientVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", templateEmailConfirmationClientVo.getLibelle());
        query += SearchUtil.addConstraint("o", "objet", "LIKE", templateEmailConfirmationClientVo.getObjet());
        query += SearchUtil.addConstraint("o", "corps", "LIKE", templateEmailConfirmationClientVo.getCorps());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    @Transactional
    public void delete(List<TemplateEmailConfirmationClient> templateEmailConfirmationClients) {
        if (ListUtil.isNotEmpty(templateEmailConfirmationClients)) {
            templateEmailConfirmationClients.forEach(e -> templateEmailConfirmationClientDao.delete(e));
        }
    }

    @Override
    public void update(List<TemplateEmailConfirmationClient> templateEmailConfirmationClients) {
        if (ListUtil.isNotEmpty(templateEmailConfirmationClients)) {
            templateEmailConfirmationClients.forEach(e -> templateEmailConfirmationClientDao.save(e));
        }
    }


}
