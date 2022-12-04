package com.maneo.kosc.service.admin.impl.template;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.maneo.kosc.bean.template.TemplateEmailReportDemandeManeoClientInjoignable;
import com.maneo.kosc.dao.template.TemplateEmailReportDemandeManeoClientInjoignableDao;
import com.maneo.kosc.service.admin.facade.template.TemplateEmailReportDemandeManeoClientInjoignableAdminService;

import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailReportDemandeManeoClientInjoignableVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class TemplateEmailReportDemandeManeoClientInjoignableAdminServiceImpl extends AbstractServiceImpl<TemplateEmailReportDemandeManeoClientInjoignable> implements TemplateEmailReportDemandeManeoClientInjoignableAdminService {

@Autowired
private TemplateEmailReportDemandeManeoClientInjoignableDao templateEmailReportDemandeManeoClientInjoignableDao;



@Autowired
private EntityManager entityManager;


@Override
public List<TemplateEmailReportDemandeManeoClientInjoignable> findAll(){
        return templateEmailReportDemandeManeoClientInjoignableDao.findAll();
}

@Override
public TemplateEmailReportDemandeManeoClientInjoignable findById(Long id){
if(id==null) return null;
return templateEmailReportDemandeManeoClientInjoignableDao.getOne(id);
}

@Override
public TemplateEmailReportDemandeManeoClientInjoignable findByIdWithAssociatedList(Long id){
    return findById(id);
}



@Transactional
public int deleteById(Long id){
int res=0;
if(templateEmailReportDemandeManeoClientInjoignableDao.findById(id).isPresent())  {
templateEmailReportDemandeManeoClientInjoignableDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public TemplateEmailReportDemandeManeoClientInjoignable update(TemplateEmailReportDemandeManeoClientInjoignable templateEmailReportDemandeManeoClientInjoignable){
TemplateEmailReportDemandeManeoClientInjoignable foundedTemplateEmailReportDemandeManeoClientInjoignable = findById(templateEmailReportDemandeManeoClientInjoignable.getId());
if(foundedTemplateEmailReportDemandeManeoClientInjoignable==null) return null;
else{
return  templateEmailReportDemandeManeoClientInjoignableDao.save(templateEmailReportDemandeManeoClientInjoignable);
}
}

@Override
public TemplateEmailReportDemandeManeoClientInjoignable save (TemplateEmailReportDemandeManeoClientInjoignable templateEmailReportDemandeManeoClientInjoignable){



    return templateEmailReportDemandeManeoClientInjoignableDao.save(templateEmailReportDemandeManeoClientInjoignable);


}

@Override
public List<TemplateEmailReportDemandeManeoClientInjoignable> save(List<TemplateEmailReportDemandeManeoClientInjoignable> templateEmailReportDemandeManeoClientInjoignables){
List<TemplateEmailReportDemandeManeoClientInjoignable> list = new ArrayList<>();
for(TemplateEmailReportDemandeManeoClientInjoignable templateEmailReportDemandeManeoClientInjoignable: templateEmailReportDemandeManeoClientInjoignables){
list.add(save(templateEmailReportDemandeManeoClientInjoignable));
}
return list;
}



@Override
@Transactional
public int delete(TemplateEmailReportDemandeManeoClientInjoignable templateEmailReportDemandeManeoClientInjoignable){
    if(templateEmailReportDemandeManeoClientInjoignable.getId()==null) return -1;
    TemplateEmailReportDemandeManeoClientInjoignable foundedTemplateEmailReportDemandeManeoClientInjoignable = findById(templateEmailReportDemandeManeoClientInjoignable.getId());
    if(foundedTemplateEmailReportDemandeManeoClientInjoignable==null) return -1;
templateEmailReportDemandeManeoClientInjoignableDao.delete(foundedTemplateEmailReportDemandeManeoClientInjoignable);
return 1;
}


public List<TemplateEmailReportDemandeManeoClientInjoignable> findByCriteria(TemplateEmailReportDemandeManeoClientInjoignableVo templateEmailReportDemandeManeoClientInjoignableVo){
String query = "SELECT o FROM TemplateEmailReportDemandeManeoClientInjoignable o  WHERE 1=1";
            query += SearchUtil.addConstraint( "o", "id","=",templateEmailReportDemandeManeoClientInjoignableVo.getId());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",templateEmailReportDemandeManeoClientInjoignableVo.getLibelle());
            query += SearchUtil.addConstraint( "o", "objet","LIKE",templateEmailReportDemandeManeoClientInjoignableVo.getObjet());
            query += SearchUtil.addConstraint( "o", "corps","LIKE",templateEmailReportDemandeManeoClientInjoignableVo.getCorps());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<TemplateEmailReportDemandeManeoClientInjoignable> templateEmailReportDemandeManeoClientInjoignables){
if(ListUtil.isNotEmpty(templateEmailReportDemandeManeoClientInjoignables)){
templateEmailReportDemandeManeoClientInjoignables.forEach(e->templateEmailReportDemandeManeoClientInjoignableDao.delete(e));
}
}
@Override
public void update(List<TemplateEmailReportDemandeManeoClientInjoignable> templateEmailReportDemandeManeoClientInjoignables){
if(ListUtil.isNotEmpty(templateEmailReportDemandeManeoClientInjoignables)){
templateEmailReportDemandeManeoClientInjoignables.forEach(e->templateEmailReportDemandeManeoClientInjoignableDao.save(e));
}
}




    }
