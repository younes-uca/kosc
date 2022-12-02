package com.maneo.kosc.service.admin.impl;

import com.maneo.kosc.bean.JourFerie;
import com.maneo.kosc.dao.JourFerieDao;
import com.maneo.kosc.service.admin.facade.JourFerieAdminService;
import com.maneo.kosc.service.core.impl.AbstractServiceImpl;
import com.maneo.kosc.service.util.DateUtil;
import com.maneo.kosc.service.util.ListUtil;
import com.maneo.kosc.service.util.SearchUtil;
import com.maneo.kosc.ws.rest.provided.vo.JourFerieVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class JourFerieAdminServiceImpl extends AbstractServiceImpl<JourFerie> implements JourFerieAdminService {

    @Autowired
    private JourFerieDao jourFerieDao;
    @Autowired
    private EntityManager entityManager;



    @Override
    public Long calcNombreJourTotal(Date dateDebut, Date dateFin) {
        List<JourFerieVo> res = findByDateMinAndMax(dateDebut, dateFin);
        System.out.println("res = " + res);
        Long sum = 0L;
        for (JourFerieVo jourFerieVo : res) {
            sum += jourFerieVo.getNbrJour();
        }
        System.out.println("sum = " + sum);
        return sum;
    }

    private List<JourFerieVo> findByDateMinAndMax(Date dateDebut, Date dateFin) {
        List<JourFerie> calendrierJourFerieses = findAll();
        List<JourFerieVo> res = new ArrayList();

        if(dateFin!=null && dateDebut!=null){
            if (calendrierJourFerieses != null) {
                for (JourFerie jf : calendrierJourFerieses) {
                    if (jf.getDateFin().getTime() < dateFin.getTime() || jf.getDateDebut().getTime() > dateDebut.getTime()) {
                        Date dateMax = jf.getDateFin();
                        Date dateMin = jf.getDateDebut();
                        if (jf.getDateDebut().getTime() < dateDebut.getTime()) {
                            dateMin = dateDebut;
                        }
                        if (dateFin.getTime() < jf.getDateFin().getTime()) {
                            dateMax = dateFin;
                        }
                        JourFerieVo jfv = new JourFerieVo(jf.getDateDebut(), jf.getDateFin(), DateUtil.diffDays(dateMin, dateMax));
                        res.add(jfv);
                    }
                }
            }
        }

        return res;
    }

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



    @Override
    public JourFerie findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    public List<JourFerie> findByCriteria(JourFerieVo jourFerieVo) {

        String query = "SELECT o FROM JourFerie o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", jourFerieVo.getId());
        query += SearchUtil.addConstraintDate("o", "dateDebut", "=", jourFerieVo.getDateDebut());
        query += SearchUtil.addConstraintDate("o", "dateFin", "=", jourFerieVo.getDateFin());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", jourFerieVo.getLibelle());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateDebut", jourFerieVo.getDateDebutMin(), jourFerieVo.getDateDebutMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateFin", jourFerieVo.getDateFinMin(), jourFerieVo.getDateFinMax());


        query += "ORDER BY o.dateDebut DESC";

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
