package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.TemplateEmailFtlChercheurService;

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
import com.maneo.kosc.bean.TemplateEmailFtl;
import com.maneo.kosc.ws.rest.provided.converter.TemplateEmailFtlConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailFtlVo;

@Api("Manages templateEmailFtl services")
@RestController
@RequestMapping("api/chercheur/templateEmailFtl")
public class TemplateEmailFtlRestChercheur {

    @Autowired
    private TemplateEmailFtlChercheurService templateEmailFtlService;

    @Autowired
    private TemplateEmailFtlConverter templateEmailFtlConverter;


    @ApiOperation("Updates the specified  templateEmailFtl")
    @PutMapping("/")
    public TemplateEmailFtlVo update(@RequestBody TemplateEmailFtlVo templateEmailFtlVo) {
        TemplateEmailFtl templateEmailFtl = templateEmailFtlConverter.toItem(templateEmailFtlVo);
        templateEmailFtl = templateEmailFtlService.update(templateEmailFtl);
        return templateEmailFtlConverter.toVo(templateEmailFtl);
    }

    @ApiOperation("Finds a list of all templateEmailFtls")
    @GetMapping("/")
    public List<TemplateEmailFtlVo> findAll() {
        return templateEmailFtlConverter.toVo(templateEmailFtlService.findAll());
    }

    @ApiOperation("Finds a templateEmailFtl with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailFtlVo findByIdWithAssociatedList(@PathVariable Long id) {
        return templateEmailFtlConverter.toVo(templateEmailFtlService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailFtl by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailFtlVo> findByCriteria(@RequestBody TemplateEmailFtlVo templateEmailFtlVo) {
        return templateEmailFtlConverter.toVo(templateEmailFtlService.findByCriteria(templateEmailFtlVo));
    }

    @ApiOperation("Finds a templateEmailFtl by id")
    @GetMapping("/id/{id}")
    public TemplateEmailFtlVo findById(@PathVariable Long id) {
        return templateEmailFtlConverter.toVo(templateEmailFtlService.findById(id));
    }

    @ApiOperation("Saves the specified  templateEmailFtl")
    @PostMapping("/")
    public TemplateEmailFtlVo save(@RequestBody TemplateEmailFtlVo templateEmailFtlVo) {
        TemplateEmailFtl templateEmailFtl = templateEmailFtlConverter.toItem(templateEmailFtlVo);
        templateEmailFtl = templateEmailFtlService.save(templateEmailFtl);
        return templateEmailFtlConverter.toVo(templateEmailFtl);
    }

    @ApiOperation("Delete the specified templateEmailFtl")
    @DeleteMapping("/")
    public int delete(@RequestBody TemplateEmailFtlVo templateEmailFtlVo) {
        TemplateEmailFtl templateEmailFtl = templateEmailFtlConverter.toItem(templateEmailFtlVo);
        return templateEmailFtlService.delete(templateEmailFtl);
    }

    @ApiOperation("Deletes a templateEmailFtl by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return templateEmailFtlService.deleteById(id);
    }


}
