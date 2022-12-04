package com.maneo.kosc.service.admin.impl;

import java.util.Date;
import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.technicien.ArretTravail;
import com.maneo.kosc.bean.technicien.Technicien;
import com.maneo.kosc.bean.technicien.RaisonArretTravail;
import com.maneo.kosc.dao.ArretTravailDao;
import com.maneo.kosc.service.admin.facade.ArretTravailAdminService;
import com.maneo.kosc.service.admin.facade.RaisonArretTravailAdminService;
import com.maneo.kosc.service.admin.facade.TechnicienAdminService;

import com.maneo.kosc.ws.rest.provided.vo.ArretTravailVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class ArretTravailAdminServiceImpl extends AbstractServiceImpl<ArretTravail> implements ArretTravailAdminService {

    @Autowired
    private ArretTravailDao arretTravailDao;

    @Autowired
    private RaisonArretTravailAdminService raisonArretTravailService;
    @Autowired
    private TechnicienAdminService technicienService;


    @Autowired
    private EntityManager entityManager;
    @Override
    public List<ArretTravail> findByTechnicienIdAndDateDebutGreaterThan(Long id, Date dateDebut) {
        return arretTravailDao.findByTechnicienIdAndDateDebutGreaterThan(id, dateDebut);

    }


    @Override
    public List<ArretTravail> findAll() {
        return arretTravailDao.findAll();
    }

    @Override
    public List<ArretTravail> findByTechnicienIdentifiant(String identifiant) {
        return arretTravailDao.findByTechnicienIdentifiant(identifiant);
    }


    @Override
    @Transactional
    public int deleteByTechnicienIdentifiant(String identifiant) {
        return arretTravailDao.deleteByTechnicienIdentifiant(identifiant);
    }

    @Override
    public List<ArretTravail> findByTechnicienId(Long id) {
        return arretTravailDao.findByTechnicienId(id);
    }

    @Override
    @Transactional
    public int deleteByTechnicienId(Long id) {
        return arretTravailDao.deleteByTechnicienId(id);
    }


    @Override
    public List<ArretTravail> findByRaisonArretTravailCode(String code) {
        return arretTravailDao.findByRaisonArretTravailCode(code);
    }

    @Override
    @Transactional
    public int deleteByRaisonArretTravailCode(String code) {
        return arretTravailDao.deleteByRaisonArretTravailCode(code);
    }

    @Override
    public List<ArretTravail> findByRaisonArretTravailId(Long id) {
        return arretTravailDao.findByRaisonArretTravailId(id);
    }

    @Override
    @Transactional
    public int deleteByRaisonArretTravailId(Long id) {
        return arretTravailDao.deleteByRaisonArretTravailId(id);
    }


    @Override
    public ArretTravail findById(Long id) {
        if (id == null) return null;
        return arretTravailDao.getOne(id);
    }

    @Override
    public ArretTravail findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (arretTravailDao.findById(id).isPresent()) {
            arretTravailDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public ArretTravail update(ArretTravail arretTravail) {
        ArretTravail foundedArretTravail = findById(arretTravail.getId());
        if (foundedArretTravail == null) return null;
        else {
            return arretTravailDao.save(arretTravail);
        }
    }

    @Override
    public ArretTravail save(ArretTravail arretTravail) {


        findTechnicien(arretTravail);
        findRaisonArretTravail(arretTravail);

        return arretTravailDao.save(arretTravail);


    }

    @Override
    public List<ArretTravail> save(List<ArretTravail> arretTravails) {
        List<ArretTravail> list = new ArrayList<>();
        for (ArretTravail arretTravail : arretTravails) {
            list.add(save(arretTravail));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(ArretTravail arretTravail) {
        if (arretTravail.getId() == null) return -1;
        ArretTravail foundedArretTravail = findById(arretTravail.getId());
        if (foundedArretTravail == null) return -1;
        arretTravailDao.delete(foundedArretTravail);
        return 1;
    }


    public List<ArretTravail> findByCriteria(ArretTravailVo arretTravailVo) {

        String query = "SELECT o FROM ArretTravail o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", arretTravailVo.getId());
        query += SearchUtil.addConstraintDate("o", "dateDebut", "=", arretTravailVo.getDateDebut());
        query += SearchUtil.addConstraintDate("o", "dateFin", "=", arretTravailVo.getDateFin());
        query += SearchUtil.addConstraint("o", "comment", "LIKE", arretTravailVo.getComment());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateDebut", arretTravailVo.getDateDebutMin(), arretTravailVo.getDateDebutMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateFin", arretTravailVo.getDateFinMin(), arretTravailVo.getDateFinMax());
        if (arretTravailVo.getTechnicienVo() != null) {
            query += SearchUtil.addConstraint("o", "technicien.id", "=", arretTravailVo.getTechnicienVo().getId());
            query += SearchUtil.addConstraint("o", "technicien.identifiant", "LIKE", arretTravailVo.getTechnicienVo().getIdentifiant());
        }

        if (arretTravailVo.getRaisonArretTravailVo() != null) {
            query += SearchUtil.addConstraint("o", "raisonArretTravail.id", "=", arretTravailVo.getRaisonArretTravailVo().getId());
            query += SearchUtil.addConstraint("o", "raisonArretTravail.code", "LIKE", arretTravailVo.getRaisonArretTravailVo().getCode());
        }

        return entityManager.createQuery(query).getResultList();
    }

    private void findTechnicien(ArretTravail arretTravail) {
        Technicien loadedTechnicien = technicienService.findByIdOrIdentifiant(arretTravail.getTechnicien());

        if (loadedTechnicien == null) {
            return;
        }
        arretTravail.setTechnicien(loadedTechnicien);
    }

    private void findRaisonArretTravail(ArretTravail arretTravail) {
        RaisonArretTravail loadedRaisonArretTravail = raisonArretTravailService.findByIdOrCode(arretTravail.getRaisonArretTravail());

        if (loadedRaisonArretTravail == null) {
            return;
        }
        arretTravail.setRaisonArretTravail(loadedRaisonArretTravail);
    }

    @Override
    @Transactional
    public void delete(List<ArretTravail> arretTravails) {
        if (ListUtil.isNotEmpty(arretTravails)) {
            arretTravails.forEach(e -> arretTravailDao.delete(e));
        }
    }

    @Override
    public void update(List<ArretTravail> arretTravails) {
        if (ListUtil.isNotEmpty(arretTravails)) {
            arretTravails.forEach(e -> arretTravailDao.save(e));
        }
    }

    private void createTechnicien(ArretTravail arretTravail) {
        Technicien loadedTechnicien = technicienService.findByIdOrIdentifiant(arretTravail.getTechnicien());

        if (loadedTechnicien == null) {
            loadedTechnicien = technicienService.save(new Technicien());
        }
        arretTravail.setTechnicien(loadedTechnicien);
    }

    private void createRaisonArretTravail(ArretTravail arretTravail) {
        RaisonArretTravail loadedRaisonArretTravail = raisonArretTravailService.findByIdOrCode(arretTravail.getRaisonArretTravail());

        if (loadedRaisonArretTravail == null) {
            loadedRaisonArretTravail = raisonArretTravailService.save(new RaisonArretTravail());
        }
        arretTravail.setRaisonArretTravail(loadedRaisonArretTravail);
    }

}
