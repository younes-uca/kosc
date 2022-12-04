package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.ArretTravailChercheurService;

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
import com.maneo.kosc.bean.technicien.ArretTravail;
import com.maneo.kosc.ws.rest.provided.converter.ArretTravailConverter;
import com.maneo.kosc.ws.rest.provided.vo.ArretTravailVo;

@Api("Manages arretTravail services")
@RestController
@RequestMapping("api/chercheur/arretTravail")
public class ArretTravailRestChercheur {

    @Autowired
    private ArretTravailChercheurService arretTravailService;

    @Autowired
    private ArretTravailConverter arretTravailConverter;


    @ApiOperation("Updates the specified  arretTravail")
    @PutMapping("/")
    public ArretTravailVo update(@RequestBody ArretTravailVo arretTravailVo) {
        ArretTravail arretTravail = arretTravailConverter.toItem(arretTravailVo);
        arretTravail = arretTravailService.update(arretTravail);
        return arretTravailConverter.toVo(arretTravail);
    }

    @ApiOperation("Finds a list of all arretTravails")
    @GetMapping("/")
    public List<ArretTravailVo> findAll() {
        return arretTravailConverter.toVo(arretTravailService.findAll());
    }

    @ApiOperation("Finds a arretTravail with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public ArretTravailVo findByIdWithAssociatedList(@PathVariable Long id) {
        return arretTravailConverter.toVo(arretTravailService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search arretTravail by a specific criteria")
    @PostMapping("/search")
    public List<ArretTravailVo> findByCriteria(@RequestBody ArretTravailVo arretTravailVo) {
        return arretTravailConverter.toVo(arretTravailService.findByCriteria(arretTravailVo));
    }

    @ApiOperation("Finds a arretTravail by id")
    @GetMapping("/id/{id}")
    public ArretTravailVo findById(@PathVariable Long id) {
        return arretTravailConverter.toVo(arretTravailService.findById(id));
    }

    @ApiOperation("Saves the specified  arretTravail")
    @PostMapping("/")
    public ArretTravailVo save(@RequestBody ArretTravailVo arretTravailVo) {
        ArretTravail arretTravail = arretTravailConverter.toItem(arretTravailVo);
        arretTravail = arretTravailService.save(arretTravail);
        return arretTravailConverter.toVo(arretTravail);
    }

    @ApiOperation("Delete the specified arretTravail")
    @DeleteMapping("/")
    public int delete(@RequestBody ArretTravailVo arretTravailVo) {
        ArretTravail arretTravail = arretTravailConverter.toItem(arretTravailVo);
        return arretTravailService.delete(arretTravail);
    }

    @ApiOperation("Deletes a arretTravail by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return arretTravailService.deleteById(id);
    }

    @ApiOperation("find by technicien identifiant")
    @GetMapping("/technicien/identifiant/{identifiant}")
    public List<ArretTravail> findByTechnicienIdentifiant(@PathVariable String identifiant) {
        return arretTravailService.findByTechnicienIdentifiant(identifiant);
    }

    @ApiOperation("delete by technicien identifiant")
    @DeleteMapping("/technicien/identifiant/{identifiant}")
    public int deleteByTechnicienIdentifiant(@PathVariable String identifiant) {
        return arretTravailService.deleteByTechnicienIdentifiant(identifiant);
    }

    @ApiOperation("find by technicien id")
    @GetMapping("/technicien/id/{id}")
    public List<ArretTravail> findByTechnicienId(@PathVariable Long id) {
        return arretTravailService.findByTechnicienId(id);
    }

    @ApiOperation("delete by technicien id")
    @DeleteMapping("/technicien/id/{id}")
    public int deleteByTechnicienId(@PathVariable Long id) {
        return arretTravailService.deleteByTechnicienId(id);
    }

    @ApiOperation("find by raisonArretTravail code")
    @GetMapping("/raisonArretTravail/code/{code}")
    public List<ArretTravail> findByRaisonArretTravailCode(@PathVariable String code) {
        return arretTravailService.findByRaisonArretTravailCode(code);
    }

    @ApiOperation("delete by raisonArretTravail code")
    @DeleteMapping("/raisonArretTravail/code/{code}")
    public int deleteByRaisonArretTravailCode(@PathVariable String code) {
        return arretTravailService.deleteByRaisonArretTravailCode(code);
    }

    @ApiOperation("find by raisonArretTravail id")
    @GetMapping("/raisonArretTravail/id/{id}")
    public List<ArretTravail> findByRaisonArretTravailId(@PathVariable Long id) {
        return arretTravailService.findByRaisonArretTravailId(id);
    }

    @ApiOperation("delete by raisonArretTravail id")
    @DeleteMapping("/raisonArretTravail/id/{id}")
    public int deleteByRaisonArretTravailId(@PathVariable Long id) {
        return arretTravailService.deleteByRaisonArretTravailId(id);
    }


}
