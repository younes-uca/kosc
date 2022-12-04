package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.EntrepriseChercheurService;

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
import com.maneo.kosc.bean.technicien.Entreprise;
import com.maneo.kosc.ws.rest.provided.converter.technicien.EntrepriseConverter;
import com.maneo.kosc.ws.rest.provided.vo.technicien.EntrepriseVo;

@Api("Manages entreprise services")
@RestController
@RequestMapping("api/chercheur/entreprise")
public class EntrepriseRestChercheur {

    @Autowired
    private EntrepriseChercheurService entrepriseService;

    @Autowired
    private EntrepriseConverter entrepriseConverter;


    @ApiOperation("Updates the specified  entreprise")
    @PutMapping("/")
    public EntrepriseVo update(@RequestBody EntrepriseVo entrepriseVo) {
        Entreprise entreprise = entrepriseConverter.toItem(entrepriseVo);
        entreprise = entrepriseService.update(entreprise);
        return entrepriseConverter.toVo(entreprise);
    }

    @ApiOperation("Finds a list of all entreprises")
    @GetMapping("/")
    public List<EntrepriseVo> findAll() {
        return entrepriseConverter.toVo(entrepriseService.findAll());
    }

    @ApiOperation("Finds a entreprise with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public EntrepriseVo findByIdWithAssociatedList(@PathVariable Long id) {
        return entrepriseConverter.toVo(entrepriseService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search entreprise by a specific criteria")
    @PostMapping("/search")
    public List<EntrepriseVo> findByCriteria(@RequestBody EntrepriseVo entrepriseVo) {
        return entrepriseConverter.toVo(entrepriseService.findByCriteria(entrepriseVo));
    }

    @ApiOperation("Finds a entreprise by id")
    @GetMapping("/id/{id}")
    public EntrepriseVo findById(@PathVariable Long id) {
        return entrepriseConverter.toVo(entrepriseService.findById(id));
    }

    @ApiOperation("Saves the specified  entreprise")
    @PostMapping("/")
    public EntrepriseVo save(@RequestBody EntrepriseVo entrepriseVo) {
        Entreprise entreprise = entrepriseConverter.toItem(entrepriseVo);
        entreprise = entrepriseService.save(entreprise);
        return entrepriseConverter.toVo(entreprise);
    }

    @ApiOperation("Delete the specified entreprise")
    @DeleteMapping("/")
    public int delete(@RequestBody EntrepriseVo entrepriseVo) {
        Entreprise entreprise = entrepriseConverter.toItem(entrepriseVo);
        return entrepriseService.delete(entreprise);
    }

    @ApiOperation("Deletes a entreprise by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return entrepriseService.deleteById(id);
    }


}
