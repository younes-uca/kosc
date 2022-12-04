package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.TemplateEmailCriChercheurService;

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
import com.maneo.kosc.bean.template.TemplateEmailCri;
import com.maneo.kosc.ws.rest.provided.converter.template.TemplateEmailCriConverter;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailCriVo;

@Api("Manages templateEmailCri services")
@RestController
@RequestMapping("api/chercheur/templateEmailCri")
public class TemplateEmailCriRestChercheur {

    @Autowired
    private TemplateEmailCriChercheurService templateEmailCriService;

    @Autowired
    private TemplateEmailCriConverter templateEmailCriConverter;


    @ApiOperation("Updates the specified  templateEmailCri")
    @PutMapping("/")
    public TemplateEmailCriVo update(@RequestBody TemplateEmailCriVo templateEmailCriVo) {
        TemplateEmailCri templateEmailCri = templateEmailCriConverter.toItem(templateEmailCriVo);
        templateEmailCri = templateEmailCriService.update(templateEmailCri);
        return templateEmailCriConverter.toVo(templateEmailCri);
    }

    @ApiOperation("Finds a list of all templateEmailCris")
    @GetMapping("/")
    public List<TemplateEmailCriVo> findAll() {
        return templateEmailCriConverter.toVo(templateEmailCriService.findAll());
    }

    @ApiOperation("Finds a templateEmailCri with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailCriVo findByIdWithAssociatedList(@PathVariable Long id) {
        return templateEmailCriConverter.toVo(templateEmailCriService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailCri by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailCriVo> findByCriteria(@RequestBody TemplateEmailCriVo templateEmailCriVo) {
        return templateEmailCriConverter.toVo(templateEmailCriService.findByCriteria(templateEmailCriVo));
    }

    @ApiOperation("Finds a templateEmailCri by id")
    @GetMapping("/id/{id}")
    public TemplateEmailCriVo findById(@PathVariable Long id) {
        return templateEmailCriConverter.toVo(templateEmailCriService.findById(id));
    }

    @ApiOperation("Saves the specified  templateEmailCri")
    @PostMapping("/")
    public TemplateEmailCriVo save(@RequestBody TemplateEmailCriVo templateEmailCriVo) {
        TemplateEmailCri templateEmailCri = templateEmailCriConverter.toItem(templateEmailCriVo);
        templateEmailCri = templateEmailCriService.save(templateEmailCri);
        return templateEmailCriConverter.toVo(templateEmailCri);
    }

    @ApiOperation("Delete the specified templateEmailCri")
    @DeleteMapping("/")
    public int delete(@RequestBody TemplateEmailCriVo templateEmailCriVo) {
        TemplateEmailCri templateEmailCri = templateEmailCriConverter.toItem(templateEmailCriVo);
        return templateEmailCriService.delete(templateEmailCri);
    }

    @ApiOperation("Deletes a templateEmailCri by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return templateEmailCriService.deleteById(id);
    }


}
