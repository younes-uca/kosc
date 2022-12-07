package com.maneo.kosc.service.admin.impl.technicien;

import java.util.*;

import java.util.stream.Collectors;

import com.maneo.kosc.bean.referentiel.JourFerie;
import com.maneo.kosc.bean.technicien.ArretTravail;
import com.maneo.kosc.dao.technicien.DepartementTechnicienDao;
import com.maneo.kosc.dao.kosc.OrdreKoscDao;
import com.maneo.kosc.service.admin.facade.referentiel.JourFerieAdminService;
import com.maneo.kosc.service.admin.facade.technicien.ArretTravailAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.technicien.Technicien;
import com.maneo.kosc.bean.technicien.Entreprise;
import com.maneo.kosc.dao.technicien.TechnicienDao;
import com.maneo.kosc.service.admin.facade.technicien.TechnicienAdminService;
import com.maneo.kosc.service.admin.facade.technicien.EntrepriseAdminService;

import com.maneo.kosc.ws.rest.provided.vo.technicien.TechnicienVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TechnicienAdminServiceImpl extends AbstractServiceImpl<Technicien> implements TechnicienAdminService {

    @Autowired
    private TechnicienDao technicienDao;

    @Autowired
    private EntrepriseAdminService entrepriseService;

    @Autowired
    private DepartementTechnicienDao departementTechnicienDao;

    @Autowired
    private EntityManager entityManager;
    @Autowired
    private OrdreKoscDao ordreKoscDao;
    @Autowired
    private ArretTravailAdminService arretTravailAdminService;
    @Autowired
    private JourFerieAdminService jourFerieAdminService;

    @Override
    public Technicien findByUsername(String username) {
        return technicienDao.findByUsername(username);
    }

    @Override
    public List<Technicien> findAll() {
        return technicienDao.findAll();
    }

    @Override
    public List<Technicien> findByEntrepriseCode(String code) {
        return technicienDao.findByEntrepriseCode(code);
    }

    @Override
    @Transactional
    public int deleteByEntrepriseCode(String code) {
        return technicienDao.deleteByEntrepriseCode(code);
    }

    @Override
    public List<Technicien> findByEntrepriseId(Long id) {
        return technicienDao.findByEntrepriseId(id);
    }

    @Override
    @Transactional
    public int deleteByEntrepriseId(Long id) {
        return technicienDao.deleteByEntrepriseId(id);
    }

    @Override
    public Technicien findByIdentifiant(String identifiant) {
        if (identifiant == null) return null;
        return technicienDao.findByIdentifiant(identifiant);
    }

    @Override
    @Transactional
    public int deleteByIdentifiant(String identifiant) {
        return technicienDao.deleteByIdentifiant(identifiant);
    }

    @Override
    public List<Technicien> findAppropriateTechnicien(Date dateRdv, String codeDepartement) {
        List<Technicien> techniciensDispo;
        if(codeDepartement == null || codeDepartement.isEmpty())
            return null;
        else if(dateRdv == null || dateRdv.toString().isEmpty())
            return departementTechnicienDao.findTechnicienByDepartementCode(codeDepartement);
        else{
            List<Technicien> techniciensInDepart = departementTechnicienDao.findTechnicienByDepartementCode(codeDepartement);
            List<Technicien> techniciensInorders = ordreKoscDao.findTechnicienByDateRndv(dateRdv);
            techniciensDispo=techniciensInDepart.stream()
                    .filter(technicien -> !techniciensInorders.contains(technicien))
                    .collect(Collectors.toList());}
        for(Technicien technicien: techniciensDispo){
            List<ArretTravail> techniciensArretTravail = arretTravailAdminService.findByTechnicienIdentifiant(technicien.getIdentifiant());
            for (ArretTravail e : techniciensArretTravail) {
                if (!compareDate(e.getDateDebut(), e.getDateFin(), dateRdv)){
                    techniciensDispo.remove(techniciensDispo.indexOf(technicien));
                }
            }
//            List<JourFerie> jourFeries = jourFerieAdminService.findAll();
//            for (JourFerie jourFerie : jourFeries){
//                if (compareDate(jourFerie.getDateDebut(), jourFerie.getDateFin(), dateRdv)){
//                    techniciensDispo.removeAll(techniciensDispo);
//                }
//            }
        }

        return techniciensDispo;
    }

    public boolean compareDate(Date dateDebut, Date dateFin, Date date){
        return (date.before(dateDebut)) || (date.after(dateFin));
    }

    @Override
    public Technicien findByIdOrIdentifiant(Technicien technicien) {
        Technicien resultat = null;
        if (technicien != null) {
            if (StringUtil.isNotEmpty(technicien.getId())) {
                resultat = technicienDao.getOne(technicien.getId());
            } else if (StringUtil.isNotEmpty(technicien.getIdentifiant())) {
                resultat = technicienDao.findByIdentifiant(technicien.getIdentifiant());
            } else if (StringUtil.isNotEmpty(technicien.getUsername())) {
                resultat = technicienDao.findByUsername(technicien.getUsername());
            }
        }
        return resultat;
    }

    @Override
    public Technicien findById(Long id) {
        if (id == null) return null;
        return technicienDao.getOne(id);
    }

    @Override
    public Technicien findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (technicienDao.findById(id).isPresent()) {
            technicienDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public Technicien update(Technicien technicien) {
        Technicien foundedTechnicien = findById(technicien.getId());
        if (foundedTechnicien == null) return null;
        else {
            return technicienDao.save(technicien);
        }
    }

    private void prepareSave(Technicien technicien) {
        technicien.setCredentialsNonExpired(false);
        technicien.setEnabled(false);
        technicien.setAccountNonExpired(false);
        technicien.setAccountNonLocked(false);
        technicien.setPasswordChanged(false);


    }

    @Override
    public Technicien save(Technicien technicien) {
        prepareSave(technicien);
        Technicien result = null;
        Technicien foundedTechnicien = findByIdentifiant(technicien.getIdentifiant());
        Technicien foundedTechnicienByUsername = findByIdentifiant(technicien.getIdentifiant());
        if (foundedTechnicien == null && foundedTechnicienByUsername == null) {
            findEntreprise(technicien);
            Technicien savedTechnicien = technicienDao.save(technicien);
            result = savedTechnicien;
        }

        return result;
    }

    @Override
    public List<Technicien> save(List<Technicien> techniciens) {
        List<Technicien> list = new ArrayList<>();
        for (Technicien technicien : techniciens) {
            list.add(save(technicien));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(Technicien technicien) {
        if (technicien.getIdentifiant() == null) return -1;

        Technicien foundedTechnicien = findByIdentifiant(technicien.getIdentifiant());
        if (foundedTechnicien == null) return -1;
        technicienDao.delete(foundedTechnicien);
        return 1;
    }


    public List<Technicien> findByCriteria(TechnicienVo technicienVo) {

        String query = "SELECT o FROM Technicien o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", technicienVo.getId());
        query += SearchUtil.addConstraint("o", "cellPhone", "LIKE", technicienVo.getCellPhone());
        query += SearchUtil.addConstraint("o", "email", "LIKE", technicienVo.getEmail());
        query += SearchUtil.addConstraint("o", "emailAttachement", "LIKE", technicienVo.getEmailAttachement());
        query += SearchUtil.addConstraint("o", "identifiant", "LIKE", technicienVo.getIdentifiant());
        query += SearchUtil.addConstraint("o", "motPasse", "LIKE", technicienVo.getMotPasse());
        query += SearchUtil.addConstraint("o", "adresseOnt", "LIKE", technicienVo.getAdresseOnt());
        query += SearchUtil.addConstraint("o", "credentialsNonExpired", "=", technicienVo.getCredentialsNonExpired());
        query += SearchUtil.addConstraint("o", "enabled", "=", technicienVo.getEnabled());
        query += SearchUtil.addConstraint("o", "accountNonExpired", "=", technicienVo.getAccountNonExpired());
        query += SearchUtil.addConstraint("o", "accountNonLocked", "=", technicienVo.getAccountNonLocked());
        query += SearchUtil.addConstraint("o", "passwordChanged", "=", technicienVo.getPasswordChanged());
        query += SearchUtil.addConstraintDate("o", "createdAt", "=", technicienVo.getCreatedAt());
        query += SearchUtil.addConstraintDate("o", "updatedAt", "=", technicienVo.getUpdatedAt());
        query += SearchUtil.addConstraint("o", "username", "LIKE", technicienVo.getUsername());
        query += SearchUtil.addConstraint("o", "password", "LIKE", technicienVo.getPassword());
        query += SearchUtil.addConstraint("o", "prenom", "LIKE", technicienVo.getPrenom());
        query += SearchUtil.addConstraint("o", "nom", "LIKE", technicienVo.getNom());
        query += SearchUtil.addConstraintMinMaxDate("o", "createdAt", technicienVo.getCreatedAtMin(), technicienVo.getCreatedAtMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "updatedAt", technicienVo.getUpdatedAtMin(), technicienVo.getUpdatedAtMax());
        if (technicienVo.getEntrepriseVo() != null) {
            query += SearchUtil.addConstraint("o", "entreprise.id", "=", technicienVo.getEntrepriseVo().getId());
            query += SearchUtil.addConstraint("o", "entreprise.code", "LIKE", technicienVo.getEntrepriseVo().getCode());
        }

        return entityManager.createQuery(query).getResultList();
    }

    private void findEntreprise(Technicien technicien) {
        Entreprise loadedEntreprise = entrepriseService.findByIdOrCode(technicien.getEntreprise());

        if (loadedEntreprise == null) {
            return;
        }
        technicien.setEntreprise(loadedEntreprise);
    }

    @Override
    @Transactional
    public void delete(List<Technicien> techniciens) {
        if (ListUtil.isNotEmpty(techniciens)) {
            techniciens.forEach(e -> technicienDao.delete(e));
        }
    }

    @Override
    public void update(List<Technicien> techniciens) {
        if (ListUtil.isNotEmpty(techniciens)) {
            techniciens.forEach(e -> technicienDao.save(e));
        }
    }

    private void createEntreprise(Technicien technicien) {
        Entreprise loadedEntreprise = entrepriseService.findByIdOrCode(technicien.getEntreprise());

        if (loadedEntreprise == null) {
            loadedEntreprise = entrepriseService.save(new Entreprise());
        }
        technicien.setEntreprise(loadedEntreprise);
    }

}
