package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.TechnicienChercheurService;

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
import com.maneo.kosc.bean.Technicien;
import com.maneo.kosc.ws.rest.provided.converter.TechnicienConverter;
import com.maneo.kosc.ws.rest.provided.vo.TechnicienVo;

@Api("Manages technicien services")
@RestController
@RequestMapping("api/chercheur/technicien")
public class TechnicienRestChercheur {

    @Autowired
    private TechnicienChercheurService technicienService;

    @Autowired
    private TechnicienConverter technicienConverter;


    @ApiOperation("Updates the specified  technicien")
    @PutMapping("/")
    public TechnicienVo update(@RequestBody TechnicienVo technicienVo) {
        Technicien technicien = technicienConverter.toItem(technicienVo);
        technicien = technicienService.update(technicien);
        return technicienConverter.toVo(technicien);
    }

    @ApiOperation("Finds a list of all techniciens")
    @GetMapping("/")
    public List<TechnicienVo> findAll() {
        return technicienConverter.toVo(technicienService.findAll());
    }

    @ApiOperation("Finds a technicien with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TechnicienVo findByIdWithAssociatedList(@PathVariable Long id) {
        return technicienConverter.toVo(technicienService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search technicien by a specific criteria")
    @PostMapping("/search")
    public List<TechnicienVo> findByCriteria(@RequestBody TechnicienVo technicienVo) {
        return technicienConverter.toVo(technicienService.findByCriteria(technicienVo));
    }

    @ApiOperation("Finds a technicien by id")
    @GetMapping("/id/{id}")
    public TechnicienVo findById(@PathVariable Long id) {
        return technicienConverter.toVo(technicienService.findById(id));
    }

    @ApiOperation("Saves the specified  technicien")
    @PostMapping("/")
    public TechnicienVo save(@RequestBody TechnicienVo technicienVo) {
        Technicien technicien = technicienConverter.toItem(technicienVo);
        technicien = technicienService.save(technicien);
        return technicienConverter.toVo(technicien);
    }

    @ApiOperation("Delete the specified technicien")
    @DeleteMapping("/")
    public int delete(@RequestBody TechnicienVo technicienVo) {
        Technicien technicien = technicienConverter.toItem(technicienVo);
        return technicienService.delete(technicien);
    }

    @ApiOperation("Deletes a technicien by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return technicienService.deleteById(id);
    }

    @ApiOperation("find by entreprise code")
    @GetMapping("/entreprise/code/{code}")
    public List<Technicien> findByEntrepriseCode(@PathVariable String code) {
        return technicienService.findByEntrepriseCode(code);
    }

    @ApiOperation("delete by entreprise code")
    @DeleteMapping("/entreprise/code/{code}")
    public int deleteByEntrepriseCode(@PathVariable String code) {
        return technicienService.deleteByEntrepriseCode(code);
    }

    @ApiOperation("find by entreprise id")
    @GetMapping("/entreprise/id/{id}")
    public List<Technicien> findByEntrepriseId(@PathVariable Long id) {
        return technicienService.findByEntrepriseId(id);
    }

    @ApiOperation("delete by entreprise id")
    @DeleteMapping("/entreprise/id/{id}")
    public int deleteByEntrepriseId(@PathVariable Long id) {
        return technicienService.deleteByEntrepriseId(id);
    }


}
