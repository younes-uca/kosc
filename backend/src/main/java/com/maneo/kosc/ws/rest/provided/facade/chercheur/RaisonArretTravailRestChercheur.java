package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.RaisonArretTravailChercheurService;

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
import com.maneo.kosc.bean.RaisonArretTravail;
import com.maneo.kosc.ws.rest.provided.converter.RaisonArretTravailConverter;
import com.maneo.kosc.ws.rest.provided.vo.RaisonArretTravailVo;

@Api("Manages raisonArretTravail services")
@RestController
@RequestMapping("api/chercheur/raisonArretTravail")
public class RaisonArretTravailRestChercheur {

    @Autowired
    private RaisonArretTravailChercheurService raisonArretTravailService;

    @Autowired
    private RaisonArretTravailConverter raisonArretTravailConverter;


    @ApiOperation("Updates the specified  raisonArretTravail")
    @PutMapping("/")
    public RaisonArretTravailVo update(@RequestBody RaisonArretTravailVo raisonArretTravailVo) {
        RaisonArretTravail raisonArretTravail = raisonArretTravailConverter.toItem(raisonArretTravailVo);
        raisonArretTravail = raisonArretTravailService.update(raisonArretTravail);
        return raisonArretTravailConverter.toVo(raisonArretTravail);
    }

    @ApiOperation("Finds a list of all raisonArretTravails")
    @GetMapping("/")
    public List<RaisonArretTravailVo> findAll() {
        return raisonArretTravailConverter.toVo(raisonArretTravailService.findAll());
    }

    @ApiOperation("Finds a raisonArretTravail with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public RaisonArretTravailVo findByIdWithAssociatedList(@PathVariable Long id) {
        return raisonArretTravailConverter.toVo(raisonArretTravailService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search raisonArretTravail by a specific criteria")
    @PostMapping("/search")
    public List<RaisonArretTravailVo> findByCriteria(@RequestBody RaisonArretTravailVo raisonArretTravailVo) {
        return raisonArretTravailConverter.toVo(raisonArretTravailService.findByCriteria(raisonArretTravailVo));
    }

    @ApiOperation("Finds a raisonArretTravail by id")
    @GetMapping("/id/{id}")
    public RaisonArretTravailVo findById(@PathVariable Long id) {
        return raisonArretTravailConverter.toVo(raisonArretTravailService.findById(id));
    }

    @ApiOperation("Saves the specified  raisonArretTravail")
    @PostMapping("/")
    public RaisonArretTravailVo save(@RequestBody RaisonArretTravailVo raisonArretTravailVo) {
        RaisonArretTravail raisonArretTravail = raisonArretTravailConverter.toItem(raisonArretTravailVo);
        raisonArretTravail = raisonArretTravailService.save(raisonArretTravail);
        return raisonArretTravailConverter.toVo(raisonArretTravail);
    }

    @ApiOperation("Delete the specified raisonArretTravail")
    @DeleteMapping("/")
    public int delete(@RequestBody RaisonArretTravailVo raisonArretTravailVo) {
        RaisonArretTravail raisonArretTravail = raisonArretTravailConverter.toItem(raisonArretTravailVo);
        return raisonArretTravailService.delete(raisonArretTravail);
    }

    @ApiOperation("Deletes a raisonArretTravail by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return raisonArretTravailService.deleteById(id);
    }


}
