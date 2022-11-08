package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.TemplateSuiviChercheurService;

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
import com.maneo.kosc.bean.TemplateSuivi;
import com.maneo.kosc.ws.rest.provided.converter.TemplateSuiviConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateSuiviVo;

@Api("Manages templateSuivi services")
@RestController
@RequestMapping("api/chercheur/templateSuivi")
public class TemplateSuiviRestChercheur {

    @Autowired
    private TemplateSuiviChercheurService templateSuiviService;

    @Autowired
    private TemplateSuiviConverter templateSuiviConverter;


    @ApiOperation("Updates the specified  templateSuivi")
    @PutMapping("/")
    public TemplateSuiviVo update(@RequestBody TemplateSuiviVo templateSuiviVo) {
        TemplateSuivi templateSuivi = templateSuiviConverter.toItem(templateSuiviVo);
        templateSuivi = templateSuiviService.update(templateSuivi);
        return templateSuiviConverter.toVo(templateSuivi);
    }

    @ApiOperation("Finds a list of all templateSuivis")
    @GetMapping("/")
    public List<TemplateSuiviVo> findAll() {
        return templateSuiviConverter.toVo(templateSuiviService.findAll());
    }

    @ApiOperation("Finds a templateSuivi with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateSuiviVo findByIdWithAssociatedList(@PathVariable Long id) {
        return templateSuiviConverter.toVo(templateSuiviService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateSuivi by a specific criteria")
    @PostMapping("/search")
    public List<TemplateSuiviVo> findByCriteria(@RequestBody TemplateSuiviVo templateSuiviVo) {
        return templateSuiviConverter.toVo(templateSuiviService.findByCriteria(templateSuiviVo));
    }

    @ApiOperation("Finds a templateSuivi by id")
    @GetMapping("/id/{id}")
    public TemplateSuiviVo findById(@PathVariable Long id) {
        return templateSuiviConverter.toVo(templateSuiviService.findById(id));
    }

    @ApiOperation("Saves the specified  templateSuivi")
    @PostMapping("/")
    public TemplateSuiviVo save(@RequestBody TemplateSuiviVo templateSuiviVo) {
        TemplateSuivi templateSuivi = templateSuiviConverter.toItem(templateSuiviVo);
        templateSuivi = templateSuiviService.save(templateSuivi);
        return templateSuiviConverter.toVo(templateSuivi);
    }

    @ApiOperation("Delete the specified templateSuivi")
    @DeleteMapping("/")
    public int delete(@RequestBody TemplateSuiviVo templateSuiviVo) {
        TemplateSuivi templateSuivi = templateSuiviConverter.toItem(templateSuiviVo);
        return templateSuiviService.delete(templateSuivi);
    }

    @ApiOperation("Deletes a templateSuivi by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return templateSuiviService.deleteById(id);
    }


}
