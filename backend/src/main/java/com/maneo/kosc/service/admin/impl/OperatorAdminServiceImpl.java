package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.Operator;
import com.maneo.kosc.dao.OperatorDao;
import com.maneo.kosc.service.admin.facade.OperatorAdminService;

import com.maneo.kosc.ws.rest.provided.vo.OperatorVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class OperatorAdminServiceImpl extends AbstractServiceImpl<Operator> implements OperatorAdminService {

    @Autowired
    private OperatorDao operatorDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<Operator> findAll() {
        return operatorDao.findAll();
    }

    @Override
    public Operator findByReference(String reference) {
        if (reference == null) return null;
        return operatorDao.findByReference(reference);
    }

    @Override
    @Transactional
    public int deleteByReference(String reference) {
        return operatorDao.deleteByReference(reference);
    }

    @Override
    public Operator findByIdOrReference(Operator operator) {
        Operator resultat = null;
        if (operator != null) {
            if (StringUtil.isNotEmpty(operator.getId())) {
                resultat = operatorDao.getOne(operator.getId());
            } else if (StringUtil.isNotEmpty(operator.getReference())) {
                resultat = operatorDao.findByReference(operator.getReference());
            }
        }
        return resultat;
    }

    @Override
    public Operator findById(Long id) {
        if (id == null) return null;
        return operatorDao.getOne(id);
    }

    @Override
    public Operator findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (operatorDao.findById(id).isPresent()) {
            operatorDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public Operator update(Operator operator) {
        Operator foundedOperator = findById(operator.getId());
        if (foundedOperator == null) return null;
        else {
            return operatorDao.save(operator);
        }
    }

    @Override
    public Operator save(Operator operator) {

        Operator result = null;
        if (operator != null) {
            Operator foundedOperator = findByReference(operator.getReference());
            if (foundedOperator == null) {
                Operator savedOperator = operatorDao.save(operator);
                result = savedOperator;
            }

        }

        return result;
    }

    @Override
    public Operator findByLibelle(String libelle) {
        return operatorDao.findByLibelle(libelle);
    }

    @Override
    public List<Operator> save(List<Operator> operators) {
        List<Operator> list = new ArrayList<>();
        for (Operator operator : operators) {
            list.add(save(operator));
        }
        return list;
    }


    @Override
    @Transactional
    public int delete(Operator operator) {
        if (operator.getReference() == null) return -1;

        Operator foundedOperator = findByReference(operator.getReference());
        if (foundedOperator == null) return -1;
        operatorDao.delete(foundedOperator);
        return 1;
    }


    public List<Operator> findByCriteria(OperatorVo operatorVo) {

        String query = "SELECT o FROM Operator o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", operatorVo.getId());
        query += SearchUtil.addConstraint("o", "reference", "LIKE", operatorVo.getReference());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", operatorVo.getLibelle());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<Operator> findSuiviByCriteria(OperatorVo vo) {
        return null;
    }


    @Override
    @Transactional
    public void delete(List<Operator> operators) {
        if (ListUtil.isNotEmpty(operators)) {
            operators.forEach(e -> operatorDao.delete(e));
        }
    }

    @Override
    public void update(List<Operator> operators) {
        if (ListUtil.isNotEmpty(operators)) {
            operators.forEach(e -> operatorDao.save(e));
        }
    }


}
