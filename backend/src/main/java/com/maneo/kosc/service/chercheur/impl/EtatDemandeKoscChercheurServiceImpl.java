package com.maneo.kosc.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.EtatDemandeKosc;
import com.maneo.kosc.dao.EtatDemandeKoscDao;
import com.maneo.kosc.service.chercheur.facade.EtatDemandeKoscChercheurService;

import com.maneo.kosc.ws.rest.provided.vo.EtatDemandeKoscVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class EtatDemandeKoscChercheurServiceImpl extends AbstractServiceImpl<EtatDemandeKosc> implements EtatDemandeKoscChercheurService {

    @Autowired
    private EtatDemandeKoscDao etatDemandeKoscDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<EtatDemandeKosc> findAll() {
        return etatDemandeKoscDao.findAll();
    }

    @Override
    public EtatDemandeKosc findByCode(String code) {
        if (code == null) return null;
        return etatDemandeKoscDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String code) {
        return etatDemandeKoscDao.deleteByCode(code);
    }

    @Override
    public EtatDemandeKosc findByIdOrCode(EtatDemandeKosc etatDemandeKosc) {
        EtatDemandeKosc resultat = null;
        if (etatDemandeKosc != null) {
            if (StringUtil.isNotEmpty(etatDemandeKosc.getId())) {
                resultat = etatDemandeKoscDao.getOne(etatDemandeKosc.getId());
            } else if (StringUtil.isNotEmpty(etatDemandeKosc.getCode())) {
                resultat = etatDemandeKoscDao.findByCode(etatDemandeKosc.getCode());
            }
        }
        return resultat;
    }

    @Override
    public EtatDemandeKosc findById(Long id) {
        if (id == null) return null;
        return etatDemandeKoscDao.getOne(id);
    }

    @Override
    public EtatDemandeKosc findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (etatDemandeKoscDao.findById(id).isPresent()) {
            etatDemandeKoscDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public EtatDemandeKosc update(EtatDemandeKosc etatDemandeKosc) {
        EtatDemandeKosc foundedEtatDemandeKosc = findById(etatDemandeKosc.getId());
        if (foundedEtatDemandeKosc == null) return null;
        else {
            return etatDemandeKoscDao.save(etatDemandeKosc);
        }
    }

    @Override
    public EtatDemandeKosc save(EtatDemandeKosc etatDemandeKosc) {

        EtatDemandeKosc result = null;
        EtatDemandeKosc foundedEtatDemandeKosc = findByCode(etatDemandeKosc.getCode());
        if (foundedEtatDemandeKosc == null) {


            EtatDemandeKosc savedEtatDemandeKosc = etatDemandeKoscDao.save(etatDemandeKosc);

            result = savedEtatDemandeKosc;
        }

        return result;
    }

    @Override
    public List<EtatDemandeKosc> save(List<EtatDemandeKosc> etatDemandeKoscs) {
        List<EtatDemandeKosc> list = new ArrayList<>();
        for (EtatDemandeKosc etatDemandeKosc : etatDemandeKoscs) {
            list.add(save(etatDemandeKosc));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(EtatDemandeKosc etatDemandeKosc) {
        if (etatDemandeKosc.getCode() == null) return -1;

        EtatDemandeKosc foundedEtatDemandeKosc = findByCode(etatDemandeKosc.getCode());
        if (foundedEtatDemandeKosc == null) return -1;
        etatDemandeKoscDao.delete(foundedEtatDemandeKosc);
        return 1;
    }


    public List<EtatDemandeKosc> findByCriteria(EtatDemandeKoscVo etatDemandeKoscVo) {

        String query = "SELECT o FROM EtatDemandeKosc o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", etatDemandeKoscVo.getId());
        query += SearchUtil.addConstraint("o", "code", "LIKE", etatDemandeKoscVo.getCode());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", etatDemandeKoscVo.getLibelle());
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<EtatDemandeKosc> findSuiviByCriteria(EtatDemandeKoscVo vo) {
        return null;
    }


    @Override
    @Transactional
    public void delete(List<EtatDemandeKosc> etatDemandeKoscs) {
        if (ListUtil.isNotEmpty(etatDemandeKoscs)) {
            etatDemandeKoscs.forEach(e -> etatDemandeKoscDao.delete(e));
        }
    }

    @Override
    public void update(List<EtatDemandeKosc> etatDemandeKoscs) {
        if (ListUtil.isNotEmpty(etatDemandeKoscs)) {
            etatDemandeKoscs.forEach(e -> etatDemandeKoscDao.save(e));
        }
    }


}
