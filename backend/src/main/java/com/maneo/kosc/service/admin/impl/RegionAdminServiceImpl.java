package com.maneo.kosc.service.admin.impl;

import java.util.List;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

import com.maneo.kosc.bean.Region;
import com.maneo.kosc.dao.RegionDao;
import com.maneo.kosc.service.admin.facade.RegionAdminService;

import com.maneo.kosc.ws.rest.provided.vo.RegionVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

@Service
public class RegionAdminServiceImpl extends AbstractServiceImpl<Region> implements RegionAdminService {

    @Autowired
    private RegionDao regionDao;


    @Autowired
    private EntityManager entityManager;


    @Override
    public List<Region> findAll() {
        return regionDao.findAll();
    }

    @Override
    public Region findByCode(String code) {
        if (code == null) return null;
        return regionDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String code) {
        return regionDao.deleteByCode(code);
    }

    @Override
    public Region findByIdOrCode(Region region) {
        Region resultat = null;
        if (region != null) {
            if (StringUtil.isNotEmpty(region.getId())) {
                resultat = regionDao.getOne(region.getId());
            } else if (StringUtil.isNotEmpty(region.getCode())) {
                resultat = regionDao.findByCode(region.getCode());
            }
        }
        return resultat;
    }

    @Override
    public Region findById(Long id) {
        if (id == null) return null;
        return regionDao.getOne(id);
    }

    @Override
    public Region findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (regionDao.findById(id).isPresent()) {
            regionDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public Region update(Region region) {
        Region foundedRegion = findById(region.getId());
        if (foundedRegion == null) return null;
        else {
            return regionDao.save(region);
        }
    }

    @Override
    public Region save(Region region) {

        Region result = null;
        Region foundedRegion = findByCode(region.getCode());
        if (foundedRegion == null) {


            Region savedRegion = regionDao.save(region);

            result = savedRegion;
        }

        return result;
    }

    @Override
    public List<Region> save(List<Region> regions) {
        List<Region> list = new ArrayList<>();
        for (Region region : regions) {
            list.add(save(region));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(Region region) {
        if (region.getCode() == null) return -1;

        Region foundedRegion = findByCode(region.getCode());
        if (foundedRegion == null) return -1;
        regionDao.delete(foundedRegion);
        return 1;
    }


    public List<Region> findByCriteria(RegionVo regionVo) {

        String query = "SELECT o FROM Region o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", regionVo.getId());
        query += SearchUtil.addConstraint("o", "libelle", "LIKE", regionVo.getLibelle());
        query += SearchUtil.addConstraint("o", "code", "LIKE", regionVo.getCode());
        return entityManager.createQuery(query).getResultList();
    }


    @Override
    @Transactional
    public void delete(List<Region> regions) {
        if (ListUtil.isNotEmpty(regions)) {
            regions.forEach(e -> regionDao.delete(e));
        }
    }

    @Override
    public void update(List<Region> regions) {
        if (ListUtil.isNotEmpty(regions)) {
            regions.forEach(e -> regionDao.save(e));
        }
    }


}
