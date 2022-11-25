package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.maneo.kosc.bean.TemplateEmailReportDemandeManeoClientJoignableAccepte;
import com.maneo.kosc.dao.TemplateEmailReportDemandeManeoClientJoignableAccepteDao;
import com.maneo.kosc.service.admin.facade.TemplateEmailReportDemandeManeoClientJoignableAccepteAdminService;

import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeManeoClientJoignableAccepteVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailReportDemandeManeoClientJoignableAccepteAdminServiceImpl extends AbstractServiceImpl<TemplateEmailReportDemandeManeoClientJoignableAccepte> implements TemplateEmailReportDemandeManeoClientJoignableAccepteAdminService {

@Autowired
private TemplateEmailReportDemandeManeoClientJoignableAccepteDao templateEmailReportDemandeManeoClientJoignableAccepteDao;



@Autowired
private EntityManager entityManager;


@Override
public List<TemplateEmailReportDemandeManeoClientJoignableAccepte> findAll(){
        return templateEmailReportDemandeManeoClientJoignableAccepteDao.findAll();
}

@Override
public TemplateEmailReportDemandeManeoClientJoignableAccepte findById(Long id){
if(id==null) return null;
return templateEmailReportDemandeManeoClientJoignableAccepteDao.getOne(id);
}

@Override
public TemplateEmailReportDemandeManeoClientJoignableAccepte findByIdWithAssociatedList(Long id){
    return findById(id);
}



@Transactional
public int deleteById(Long id){
int res=0;
if(templateEmailReportDemandeManeoClientJoignableAccepteDao.findById(id).isPresent())  {
templateEmailReportDemandeManeoClientJoignableAccepteDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public TemplateEmailReportDemandeManeoClientJoignableAccepte update(TemplateEmailReportDemandeManeoClientJoignableAccepte templateEmailReportDemandeManeoClientJoignableAccepte){
TemplateEmailReportDemandeManeoClientJoignableAccepte foundedTemplateEmailReportDemandeManeoClientJoignableAccepte = findById(templateEmailReportDemandeManeoClientJoignableAccepte.getId());
if(foundedTemplateEmailReportDemandeManeoClientJoignableAccepte==null) return null;
else{
return  templateEmailReportDemandeManeoClientJoignableAccepteDao.save(templateEmailReportDemandeManeoClientJoignableAccepte);
}
}

@Override
public TemplateEmailReportDemandeManeoClientJoignableAccepte save (TemplateEmailReportDemandeManeoClientJoignableAccepte templateEmailReportDemandeManeoClientJoignableAccepte){



    return templateEmailReportDemandeManeoClientJoignableAccepteDao.save(templateEmailReportDemandeManeoClientJoignableAccepte);


}

@Override
public List<TemplateEmailReportDemandeManeoClientJoignableAccepte> save(List<TemplateEmailReportDemandeManeoClientJoignableAccepte> templateEmailReportDemandeManeoClientJoignableAcceptes){
List<TemplateEmailReportDemandeManeoClientJoignableAccepte> list = new ArrayList<>();
for(TemplateEmailReportDemandeManeoClientJoignableAccepte templateEmailReportDemandeManeoClientJoignableAccepte: templateEmailReportDemandeManeoClientJoignableAcceptes){
list.add(save(templateEmailReportDemandeManeoClientJoignableAccepte));
}
return list;
}



@Override
@Transactional
public int delete(TemplateEmailReportDemandeManeoClientJoignableAccepte templateEmailReportDemandeManeoClientJoignableAccepte){
    if(templateEmailReportDemandeManeoClientJoignableAccepte.getId()==null) return -1;
    TemplateEmailReportDemandeManeoClientJoignableAccepte foundedTemplateEmailReportDemandeManeoClientJoignableAccepte = findById(templateEmailReportDemandeManeoClientJoignableAccepte.getId());
    if(foundedTemplateEmailReportDemandeManeoClientJoignableAccepte==null) return -1;
templateEmailReportDemandeManeoClientJoignableAccepteDao.delete(foundedTemplateEmailReportDemandeManeoClientJoignableAccepte);
return 1;
}


public List<TemplateEmailReportDemandeManeoClientJoignableAccepte> findByCriteria(TemplateEmailReportDemandeManeoClientJoignableAccepteVo templateEmailReportDemandeManeoClientJoignableAccepteVo){
String query = "SELECT o FROM TemplateEmailReportDemandeManeoClientJoignableAccepte o  WHERE 1=1";
            query += SearchUtil.addConstraint( "o", "id","=",templateEmailReportDemandeManeoClientJoignableAccepteVo.getId());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",templateEmailReportDemandeManeoClientJoignableAccepteVo.getLibelle());
            query += SearchUtil.addConstraint( "o", "objet","LIKE",templateEmailReportDemandeManeoClientJoignableAccepteVo.getObjet());
            query += SearchUtil.addConstraint( "o", "corps","LIKE",templateEmailReportDemandeManeoClientJoignableAccepteVo.getCorps());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<TemplateEmailReportDemandeManeoClientJoignableAccepte> templateEmailReportDemandeManeoClientJoignableAcceptes){
if(ListUtil.isNotEmpty(templateEmailReportDemandeManeoClientJoignableAcceptes)){
templateEmailReportDemandeManeoClientJoignableAcceptes.forEach(e->templateEmailReportDemandeManeoClientJoignableAccepteDao.delete(e));
}
}
@Override
public void update(List<TemplateEmailReportDemandeManeoClientJoignableAccepte> templateEmailReportDemandeManeoClientJoignableAcceptes){
if(ListUtil.isNotEmpty(templateEmailReportDemandeManeoClientJoignableAcceptes)){
templateEmailReportDemandeManeoClientJoignableAcceptes.forEach(e->templateEmailReportDemandeManeoClientJoignableAccepteDao.save(e));
}
}




    }
