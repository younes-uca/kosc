package com.maneo.kosc.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.DepartementTechnicien;
import com.maneo.kosc.bean.Technicien;
import com.maneo.kosc.bean.Departement;
import com.maneo.kosc.dao.DepartementTechnicienDao;
import com.maneo.kosc.service.chercheur.facade.DepartementTechnicienChercheurService;
import com.maneo.kosc.service.chercheur.facade.DepartementChercheurService;
import com.maneo.kosc.service.chercheur.facade.TechnicienChercheurService;

import com.maneo.kosc.ws.rest.provided.vo.DepartementTechnicienVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class DepartementTechnicienChercheurServiceImpl extends AbstractServiceImpl<DepartementTechnicien> implements DepartementTechnicienChercheurService {

    @Autowired
    private DepartementTechnicienDao departementTechnicienDao;

    @Autowired
    private DepartementChercheurService departementService;
    @Autowired
    private TechnicienChercheurService technicienService;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<DepartementTechnicien> findAll() {
        return departementTechnicienDao.findAll();
    }

    @Override
    public List<DepartementTechnicien> findByTechnicienIdentifiant(String identifiant) {
        return departementTechnicienDao.findByTechnicienIdentifiant(identifiant);
    }

    @Override
    @Transactional
    public int deleteByTechnicienIdentifiant(String identifiant) {
        return departementTechnicienDao.deleteByTechnicienIdentifiant(identifiant);
    }

    @Override
    public List<DepartementTechnicien> findByTechnicienId(Long id) {
        return departementTechnicienDao.findByTechnicienId(id);
    }

    @Override
    @Transactional
    public int deleteByTechnicienId(Long id) {
        return departementTechnicienDao.deleteByTechnicienId(id);
    }


    @Override
    public List<DepartementTechnicien> findByDepartementCode(String code) {
        return departementTechnicienDao.findByDepartementCode(code);
    }

    @Override
    @Transactional
    public int deleteByDepartementCode(String code) {
        return departementTechnicienDao.deleteByDepartementCode(code);
    }

    @Override
    public List<DepartementTechnicien> findByDepartementId(Long id) {
        return departementTechnicienDao.findByDepartementId(id);
    }

    @Override
    @Transactional
    public int deleteByDepartementId(Long id) {
        return departementTechnicienDao.deleteByDepartementId(id);
    }


    @Override
    public DepartementTechnicien findById(Long id) {
        if (id == null) return null;
        return departementTechnicienDao.getOne(id);
    }

    @Override
    public DepartementTechnicien findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (departementTechnicienDao.findById(id).isPresent()) {
            departementTechnicienDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public DepartementTechnicien update(DepartementTechnicien departementTechnicien) {
        DepartementTechnicien foundedDepartementTechnicien = findById(departementTechnicien.getId());
        if (foundedDepartementTechnicien == null) return null;
        else {
            return departementTechnicienDao.save(departementTechnicien);
        }
    }

    @Override
    public DepartementTechnicien save(DepartementTechnicien departementTechnicien) {


        findTechnicien(departementTechnicien);
        findDepartement(departementTechnicien);

        return departementTechnicienDao.save(departementTechnicien);


    }

    @Override
    public List<DepartementTechnicien> save(List<DepartementTechnicien> departementTechniciens) {
        List<DepartementTechnicien> list = new ArrayList<>();
        for (DepartementTechnicien departementTechnicien : departementTechniciens) {
            list.add(save(departementTechnicien));
        }
        return list;
    }


    @Override
    @Transactional
    public int delete(DepartementTechnicien departementTechnicien) {
        if (departementTechnicien.getId() == null) return -1;
        DepartementTechnicien foundedDepartementTechnicien = findById(departementTechnicien.getId());
        if (foundedDepartementTechnicien == null) return -1;
        departementTechnicienDao.delete(foundedDepartementTechnicien);
        return 1;
    }


    public List<DepartementTechnicien> findByCriteria(DepartementTechnicienVo departementTechnicienVo) {

        String query = "SELECT o FROM DepartementTechnicien o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", departementTechnicienVo.getId());
        query += SearchUtil.addConstraintDate("o", "dateDebut", "=", departementTechnicienVo.getDateDebut());
        query += SearchUtil.addConstraintDate("o", "dateFin", "=", departementTechnicienVo.getDateFin());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateDebut", departementTechnicienVo.getDateDebutMin(), departementTechnicienVo.getDateDebutMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateFin", departementTechnicienVo.getDateFinMin(), departementTechnicienVo.getDateFinMax());
        if (departementTechnicienVo.getTechnicienVo() != null) {
            query += SearchUtil.addConstraint("o", "technicien.id", "=", departementTechnicienVo.getTechnicienVo().getId());
            query += SearchUtil.addConstraint("o", "technicien.identifiant", "LIKE", departementTechnicienVo.getTechnicienVo().getIdentifiant());
        }

        if (departementTechnicienVo.getDepartementVo() != null) {
            query += SearchUtil.addConstraint("o", "departement.id", "=", departementTechnicienVo.getDepartementVo().getId());
            query += SearchUtil.addConstraint("o", "departement.code", "LIKE", departementTechnicienVo.getDepartementVo().getCode());
        }

        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<DepartementTechnicien> findSuiviByCriteria(DepartementTechnicienVo vo) {
        return null;
    }

    private void findTechnicien(DepartementTechnicien departementTechnicien) {
        Technicien loadedTechnicien = technicienService.findByIdOrIdentifiant(departementTechnicien.getTechnicien());

        if (loadedTechnicien == null) {
            return;
        }
        departementTechnicien.setTechnicien(loadedTechnicien);
    }

    private void findDepartement(DepartementTechnicien departementTechnicien) {
        Departement loadedDepartement = departementService.findByIdOrCode(departementTechnicien.getDepartement());

        if (loadedDepartement == null) {
            return;
        }
        departementTechnicien.setDepartement(loadedDepartement);
    }

    @Override
    @Transactional
    public void delete(List<DepartementTechnicien> departementTechniciens) {
        if (ListUtil.isNotEmpty(departementTechniciens)) {
            departementTechniciens.forEach(e -> departementTechnicienDao.delete(e));
        }
    }

    @Override
    public void update(List<DepartementTechnicien> departementTechniciens) {
        if (ListUtil.isNotEmpty(departementTechniciens)) {
            departementTechniciens.forEach(e -> departementTechnicienDao.save(e));
        }
    }

    private void createTechnicien(DepartementTechnicien departementTechnicien) {
        Technicien loadedTechnicien = technicienService.findByIdOrIdentifiant(departementTechnicien.getTechnicien());

        if (loadedTechnicien == null) {
            loadedTechnicien = technicienService.save(new Technicien());
        }
        departementTechnicien.setTechnicien(loadedTechnicien);
    }

    private void createDepartement(DepartementTechnicien departementTechnicien) {
        Departement loadedDepartement = departementService.findByIdOrCode(departementTechnicien.getDepartement());

        if (loadedDepartement == null) {
            loadedDepartement = departementService.save(new Departement());
        }
        departementTechnicien.setDepartement(loadedDepartement);
    }

}
