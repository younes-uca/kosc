package com.maneo.kosc.service.admin.impl;

import com.maneo.kosc.bean.JourFerie;
import com.maneo.kosc.dao.JourFerieDao;
import com.maneo.kosc.service.admin.facade.JourFerieAdminService;
import com.maneo.kosc.service.core.impl.AbstractServiceImpl;
import com.maneo.kosc.service.util.ListUtil;
import com.maneo.kosc.service.util.SearchUtil;
import com.maneo.kosc.ws.rest.provided.vo.JourFerieVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

@Service
public class JourFerieAdminServiceImpl extends AbstractServiceImpl<JourFerie> implements JourFerieAdminService {

    @Autowired
    private JourFerieDao jourFerieDao;
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<JourFerie> findAll() {
        return jourFerieDao.findAll();
    }

    @Override
    public JourFerie findById(Long id) {
        if (id == null) return null;
        return jourFerieDao.getOne(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (jourFerieDao.findById(id).isPresent()) {
            jourFerieDao.deleteById(id);
            res = 1;
        }
        return res;
    }

    @Override
    public JourFerie update(JourFerie jourFerie) {
        JourFerie foundedJourFerie = findById(jourFerie.getId());
        if (foundedJourFerie == null) return null;
        else {
            return jourFerieDao.save(jourFerie);
        }
    }

    @Override
    public JourFerie save(JourFerie jourFerie) {

        return jourFerieDao.save(jourFerie);

    }
    
    @Override
    public List<JourFerie> save(List<JourFerie> jourFeries) {
        List<JourFerie> list = new ArrayList<>();
        for (JourFerie jourFerie : jourFeries) {
            list.add(save(jourFerie));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(JourFerie jourFerie) {
        if (jourFerie.getId() == null) return -1;
        JourFerie foundedJourFerie = findById(jourFerie.getId());
        if (foundedJourFerie == null) return -1;
        jourFerieDao.delete(foundedJourFerie);
        return 1;
    }

    public List<JourFerie> findByCriteria(JourFerieVo jourFerieVo) {

        String query = "SELECT o FROM JourFerie o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", jourFerieVo.getId());
        query += SearchUtil.addConstraintDate("o", "dateDebut", "=", jourFerieVo.getDateDebut());
        query += SearchUtil.addConstraintDate("o", "dateFin", "=", jourFerieVo.getDateFin());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", jourFerieVo.getLibelle());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateDebut", jourFerieVo.getDateDebutMin(), jourFerieVo.getDateDebutMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateFin", jourFerieVo.getDateFinMin(), jourFerieVo.getDateFinMax());
        

        return entityManager.createQuery(query).getResultList();
    }

    @Override
    @Transactional
    public void delete(List<JourFerie> jourFeries) {
        if (ListUtil.isNotEmpty(jourFeries)) {
            jourFeries.forEach(e -> jourFerieDao.delete(e));
        }
    }

    @Override
    public void update(List<JourFerie> jourFeries) {
        if (ListUtil.isNotEmpty(jourFeries)) {
            jourFeries.forEach(e -> jourFerieDao.save(e));
        }
    }
}
