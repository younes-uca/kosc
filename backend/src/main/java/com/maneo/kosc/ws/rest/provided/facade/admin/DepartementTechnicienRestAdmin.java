package com.maneo.kosc.ws.rest.provided.facade.admin;

import com.maneo.kosc.service.admin.facade.DepartementTechnicienAdminService;

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
import com.maneo.kosc.bean.technicien.DepartementTechnicien;
import com.maneo.kosc.ws.rest.provided.converter.DepartementTechnicienConverter;
import com.maneo.kosc.ws.rest.provided.vo.DepartementTechnicienVo;

@Api("Manages departementTechnicien services")
@RestController
@RequestMapping("api/admin/departementTechnicien")
public class DepartementTechnicienRestAdmin {

    @Autowired
    private DepartementTechnicienAdminService departementTechnicienService;

    @Autowired
    private DepartementTechnicienConverter departementTechnicienConverter;


    @ApiOperation("Updates the specified  departementTechnicien")
    @PutMapping("/")
    public DepartementTechnicienVo update(@RequestBody DepartementTechnicienVo departementTechnicienVo) {
        DepartementTechnicien departementTechnicien = departementTechnicienConverter.toItem(departementTechnicienVo);
        departementTechnicien = departementTechnicienService.update(departementTechnicien);
        return departementTechnicienConverter.toVo(departementTechnicien);
    }

    @ApiOperation("Finds a list of all departementTechniciens")
    @GetMapping("/")
    public List<DepartementTechnicienVo> findAll() {
        return departementTechnicienConverter.toVo(departementTechnicienService.findAll());
    }
  /*  @ApiOperation("Finds a list of all departementTechniciens with arretTravails")
    @GetMapping("/findAllWithArretTravail")
    public void findAllWithArretTravail(List<DepartementTechnicien> departementTechniciens) {
        departementTechnicienService.findAllWithArretTravail(departementTechniciens);
    }


    public List<DepartementTechnicienVo> findAllWithArretTraval( @RequestBody List<DepartementTechnicienVo> departementTechnicienVos) {
        List<DepartementTechnicien> departementTechniciens = departementTechnicienConverter.toItem(departementTechnicienVos);
        departementTechnicienService.findAllWithArretTravail(departementTechniciens);
        return departementTechnicienConverter.toVo(departementTechniciens);
    }*/

    @ApiOperation("Finds a departementTechnicien with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DepartementTechnicienVo findByIdWithAssociatedList(@PathVariable Long id) {
        return departementTechnicienConverter.toVo(departementTechnicienService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search departementTechnicien by a specific criteria")
    @PostMapping("/search")
    public List<DepartementTechnicienVo> findByCriteria(@RequestBody DepartementTechnicienVo departementTechnicienVo) {
        List<DepartementTechnicien> byCriteria = departementTechnicienService.findByCriteria(departementTechnicienVo);
        List<DepartementTechnicienVo> departementTechnicienVos = departementTechnicienConverter.toVo(byCriteria);
        return departementTechnicienVos;
    }

    @ApiOperation("Finds a departementTechnicien by id")
    @GetMapping("/id/{id}")
    public DepartementTechnicienVo findById(@PathVariable Long id) {
        return departementTechnicienConverter.toVo(departementTechnicienService.findById(id));
    }

    @ApiOperation("Saves the specified  departementTechnicien")
    @PostMapping("/")
    public DepartementTechnicienVo save(@RequestBody DepartementTechnicienVo departementTechnicienVo) {
        DepartementTechnicien departementTechnicien = departementTechnicienConverter.toItem(departementTechnicienVo);
        departementTechnicien = departementTechnicienService.save(departementTechnicien);
        return departementTechnicienConverter.toVo(departementTechnicien);
    }

    @ApiOperation("Delete the specified departementTechnicien")
    @DeleteMapping("/")
    public int delete(@RequestBody DepartementTechnicienVo departementTechnicienVo) {
        DepartementTechnicien departementTechnicien = departementTechnicienConverter.toItem(departementTechnicienVo);
        return departementTechnicienService.delete(departementTechnicien);
    }

    @ApiOperation("Deletes a departementTechnicien by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return departementTechnicienService.deleteById(id);
    }

    @ApiOperation("find by technicien identifiant")
    @GetMapping("/technicien/identifiant/{identifiant}")
    public List<DepartementTechnicien> findByTechnicienIdentifiant(@PathVariable String identifiant) {
        return departementTechnicienService.findByTechnicienIdentifiant(identifiant);
    }

    @ApiOperation("delete by technicien identifiant")
    @DeleteMapping("/technicien/identifiant/{identifiant}")
    public int deleteByTechnicienIdentifiant(@PathVariable String identifiant) {
        return departementTechnicienService.deleteByTechnicienIdentifiant(identifiant);
    }

    @ApiOperation("find by technicien id")
    @GetMapping("/technicien/id/{id}")
    public List<DepartementTechnicien> findByTechnicienId(@PathVariable Long id) {
        return departementTechnicienService.findByTechnicienId(id);
    }

    @ApiOperation("delete by technicien id")
    @DeleteMapping("/technicien/id/{id}")
    public int deleteByTechnicienId(@PathVariable Long id) {
        return departementTechnicienService.deleteByTechnicienId(id);
    }

    @ApiOperation("find by departement code")
    @GetMapping("/departement/code/{code}")
    public List<DepartementTechnicien> findByDepartementCode(@PathVariable String code) {
        return departementTechnicienService.findByDepartementCode(code);
    }

    @ApiOperation("delete by departement code")
    @DeleteMapping("/departement/code/{code}")
    public int deleteByDepartementCode(@PathVariable String code) {
        return departementTechnicienService.deleteByDepartementCode(code);
    }

    @ApiOperation("find by departement id")
    @GetMapping("/departement/id/{id}")
    public List<DepartementTechnicien> findByDepartementId(@PathVariable Long id) {
        return departementTechnicienService.findByDepartementId(id);
    }

    @ApiOperation("delete by departement id")
    @DeleteMapping("/departement/id/{id}")
    public int deleteByDepartementId(@PathVariable Long id) {
        return departementTechnicienService.deleteByDepartementId(id);
    }


}
