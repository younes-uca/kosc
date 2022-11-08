package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.Chercheur;
import com.maneo.kosc.dao.ChercheurDao;
import com.maneo.kosc.service.admin.facade.ChercheurAdminService;

import com.maneo.kosc.ws.rest.provided.vo.ChercheurVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class ChercheurAdminServiceImpl extends AbstractServiceImpl<Chercheur> implements ChercheurAdminService {

    @Autowired
    private ChercheurDao chercheurDao;


    @Autowired
    private EntityManager entityManager;

    @Override
    public Chercheur findByUsername(String username) {
        return chercheurDao.findByUsername(username);
    }

    @Override
    public List<Chercheur> findAll() {
        return chercheurDao.findAll();
    }

    @Override
    public Chercheur findByNumeroMatricule(String numeroMatricule) {
        if (numeroMatricule == null) return null;
        return chercheurDao.findByNumeroMatricule(numeroMatricule);
    }

    @Override
    @Transactional
    public int deleteByNumeroMatricule(String numeroMatricule) {
        return chercheurDao.deleteByNumeroMatricule(numeroMatricule);
    }

    @Override
    public Chercheur findByIdOrNumeroMatricule(Chercheur chercheur) {
        Chercheur resultat = null;
        if (chercheur != null) {
            if (StringUtil.isNotEmpty(chercheur.getId())) {
                resultat = chercheurDao.getOne(chercheur.getId());
            } else if (StringUtil.isNotEmpty(chercheur.getNumeroMatricule())) {
                resultat = chercheurDao.findByNumeroMatricule(chercheur.getNumeroMatricule());
            } else if (StringUtil.isNotEmpty(chercheur.getUsername())) {
                resultat = chercheurDao.findByUsername(chercheur.getUsername());
            }
        }
        return resultat;
    }

    @Override
    public Chercheur findById(Long id) {
        if (id == null) return null;
        return chercheurDao.getOne(id);
    }

    @Override
    public Chercheur findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (chercheurDao.findById(id).isPresent()) {
            chercheurDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public Chercheur update(Chercheur chercheur) {
        Chercheur foundedChercheur = findById(chercheur.getId());
        if (foundedChercheur == null) return null;
        else {
            return chercheurDao.save(chercheur);
        }
    }

    private void prepareSave(Chercheur chercheur) {
        chercheur.setCredentialsNonExpired(false);
        chercheur.setEnabled(false);
        chercheur.setAccountNonExpired(false);
        chercheur.setAccountNonLocked(false);
        chercheur.setPasswordChanged(false);


    }

    @Override
    public Chercheur save(Chercheur chercheur) {
        prepareSave(chercheur);

        Chercheur result = null;
        Chercheur foundedChercheur = findByNumeroMatricule(chercheur.getNumeroMatricule());
        Chercheur foundedChercheurByUsername = findByNumeroMatricule(chercheur.getNumeroMatricule());
        if (foundedChercheur == null && foundedChercheurByUsername == null) {


            Chercheur savedChercheur = chercheurDao.save(chercheur);

            result = savedChercheur;
        }

        return result;
    }

    @Override
    public List<Chercheur> save(List<Chercheur> chercheurs) {
        List<Chercheur> list = new ArrayList<>();
        for (Chercheur chercheur : chercheurs) {
            list.add(save(chercheur));
        }
        return list;
    }
    @Override
    @Transactional
    public int delete(Chercheur chercheur) {
        if (chercheur.getNumeroMatricule() == null) return -1;

        Chercheur foundedChercheur = findByNumeroMatricule(chercheur.getNumeroMatricule());
        if (foundedChercheur == null) return -1;
        chercheurDao.delete(foundedChercheur);
        return 1;
    }


    public List<Chercheur> findByCriteria(ChercheurVo chercheurVo) {

        String query = "SELECT o FROM Chercheur o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", chercheurVo.getId());
        query += SearchUtil.addConstraint("o", "numeroMatricule", "LIKE", chercheurVo.getNumeroMatricule());
        query += SearchUtil.addConstraint("o", "role", "LIKE", chercheurVo.getRole());
        query += SearchUtil.addConstraint("o", "credentialsNonExpired", "=", chercheurVo.getCredentialsNonExpired());
        query += SearchUtil.addConstraint("o", "enabled", "=", chercheurVo.getEnabled());
        query += SearchUtil.addConstraint("o", "accountNonExpired", "=", chercheurVo.getAccountNonExpired());
        query += SearchUtil.addConstraint("o", "accountNonLocked", "=", chercheurVo.getAccountNonLocked());
        query += SearchUtil.addConstraint("o", "passwordChanged", "=", chercheurVo.getPasswordChanged());
        query += SearchUtil.addConstraintDate("o", "createdAt", "=", chercheurVo.getCreatedAt());
        query += SearchUtil.addConstraintDate("o", "updatedAt", "=", chercheurVo.getUpdatedAt());
        query += SearchUtil.addConstraint("o", "username", "LIKE", chercheurVo.getUsername());
        query += SearchUtil.addConstraint("o", "password", "LIKE", chercheurVo.getPassword());
        query += SearchUtil.addConstraint("o", "prenom", "LIKE", chercheurVo.getPrenom());
        query += SearchUtil.addConstraint("o", "nom", "LIKE", chercheurVo.getNom());
        query += SearchUtil.addConstraintMinMaxDate("o", "createdAt", chercheurVo.getCreatedAtMin(), chercheurVo.getCreatedAtMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "updatedAt", chercheurVo.getUpdatedAtMin(), chercheurVo.getUpdatedAtMax());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<Chercheur> findSuiviByCriteria(ChercheurVo vo) {
        return null;
    }


    @Override
    @Transactional
    public void delete(List<Chercheur> chercheurs) {
        if (ListUtil.isNotEmpty(chercheurs)) {
            chercheurs.forEach(e -> chercheurDao.delete(e));
        }
    }

    @Override
    public void update(List<Chercheur> chercheurs) {
        if (ListUtil.isNotEmpty(chercheurs)) {
            chercheurs.forEach(e -> chercheurDao.save(e));
        }
    }


}
