package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.DepartementChercheurService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.maneo.kosc.bean.Departement;
import com.maneo.kosc.ws.rest.provided.converter.DepartementConverter;
import com.maneo.kosc.ws.rest.provided.vo.DepartementVo;

@Api("Manages departement services")
@RestController
@RequestMapping("api/chercheur/departement")
public class DepartementRestChercheur {

    @Autowired
    private DepartementChercheurService departementService;

    @Autowired
    private DepartementConverter departementConverter;


    @ApiOperation("Updates the specified  departement")
    @PutMapping("/")
    public DepartementVo update(@RequestBody DepartementVo departementVo) {
        Departement departement = departementConverter.toItem(departementVo);
        departement = departementService.update(departement);
        return departementConverter.toVo(departement);
    }

    @ApiOperation("Finds a list of all departements")
    @GetMapping("/")
    public List<DepartementVo> findAll() {
        return departementConverter.toVo(departementService.findAll());
    }

    @ApiOperation("Finds a departement with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DepartementVo findByIdWithAssociatedList(@PathVariable Long id) {
        return departementConverter.toVo(departementService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search departement by a specific criteria")
    @PostMapping("/search")
    public List<DepartementVo> findByCriteria(@RequestBody DepartementVo departementVo) {
        return departementConverter.toVo(departementService.findByCriteria(departementVo));
    }

    @ApiOperation("Finds a departement by id")
    @GetMapping("/id/{id}")
    public DepartementVo findById(@PathVariable Long id) {
        return departementConverter.toVo(departementService.findById(id));
    }

    @ApiOperation("Saves the specified  departement")
    @PostMapping("/")
    public DepartementVo save(@RequestBody DepartementVo departementVo) {
        Departement departement = departementConverter.toItem(departementVo);
        departement = departementService.save(departement);
        return departementConverter.toVo(departement);
    }

    @ApiOperation("Delete the specified departement")
    @DeleteMapping("/")
    public int delete(@RequestBody DepartementVo departementVo) {
        Departement departement = departementConverter.toItem(departementVo);
        return departementService.delete(departement);
    }

    @ApiOperation("Deletes a departement by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return departementService.deleteById(id);
    }

    @ApiOperation("find by region code")
    @GetMapping("/region/code/{code}")
    public List<Departement> findByRegionCode(@PathVariable String code) {
        return departementService.findByRegionCode(code);
    }

    @ApiOperation("delete by region code")
    @DeleteMapping("/region/code/{code}")
    public int deleteByRegionCode(@PathVariable String code) {
        return departementService.deleteByRegionCode(code);
    }

    @ApiOperation("find by region id")
    @GetMapping("/region/id/{id}")
    public List<Departement> findByRegionId(@PathVariable Long id) {
        return departementService.findByRegionId(id);
    }

    @ApiOperation("delete by region id")
    @DeleteMapping("/region/id/{id}")
    public int deleteByRegionId(@PathVariable Long id) {
        return departementService.deleteByRegionId(id);
    }


}
