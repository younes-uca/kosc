package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.TemplateEmailReportChercheurService;

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
import com.maneo.kosc.bean.TemplateEmailReport;
import com.maneo.kosc.ws.rest.provided.converter.TemplateEmailReportConverter;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportVo;

@Api("Manages templateEmailReport services")
@RestController
@RequestMapping("api/chercheur/templateEmailReport")
public class TemplateEmailReportRestChercheur {

    @Autowired
    private TemplateEmailReportChercheurService templateEmailReportService;

    @Autowired
    private TemplateEmailReportConverter templateEmailReportConverter;


    @ApiOperation("Updates the specified  templateEmailReport")
    @PutMapping("/")
    public TemplateEmailReportVo update(@RequestBody TemplateEmailReportVo templateEmailReportVo) {
        TemplateEmailReport templateEmailReport = templateEmailReportConverter.toItem(templateEmailReportVo);
        templateEmailReport = templateEmailReportService.update(templateEmailReport);
        return templateEmailReportConverter.toVo(templateEmailReport);
    }

    @ApiOperation("Finds a list of all templateEmailReports")
    @GetMapping("/")
    public List<TemplateEmailReportVo> findAll() {
        return templateEmailReportConverter.toVo(templateEmailReportService.findAll());
    }

    @ApiOperation("Finds a templateEmailReport with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailReportVo findByIdWithAssociatedList(@PathVariable Long id) {
        return templateEmailReportConverter.toVo(templateEmailReportService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailReport by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailReportVo> findByCriteria(@RequestBody TemplateEmailReportVo templateEmailReportVo) {
        return templateEmailReportConverter.toVo(templateEmailReportService.findByCriteria(templateEmailReportVo));
    }

    @ApiOperation("Finds a templateEmailReport by id")
    @GetMapping("/id/{id}")
    public TemplateEmailReportVo findById(@PathVariable Long id) {
        return templateEmailReportConverter.toVo(templateEmailReportService.findById(id));
    }

    @ApiOperation("Saves the specified  templateEmailReport")
    @PostMapping("/")
    public TemplateEmailReportVo save(@RequestBody TemplateEmailReportVo templateEmailReportVo) {
        TemplateEmailReport templateEmailReport = templateEmailReportConverter.toItem(templateEmailReportVo);
        templateEmailReport = templateEmailReportService.save(templateEmailReport);
        return templateEmailReportConverter.toVo(templateEmailReport);
    }

    @ApiOperation("Delete the specified templateEmailReport")
    @DeleteMapping("/")
    public int delete(@RequestBody TemplateEmailReportVo templateEmailReportVo) {
        TemplateEmailReport templateEmailReport = templateEmailReportConverter.toItem(templateEmailReportVo);
        return templateEmailReportService.delete(templateEmailReport);
    }

    @ApiOperation("Deletes a templateEmailReport by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return templateEmailReportService.deleteById(id);
    }


}
