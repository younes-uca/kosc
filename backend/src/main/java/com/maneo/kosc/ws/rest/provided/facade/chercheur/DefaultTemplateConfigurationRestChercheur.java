package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.bean.DefaultTemplateConfiguration;
import com.maneo.kosc.service.chercheur.facade.DefaultTemplateConfigurationChercheurService;
import com.maneo.kosc.ws.rest.provided.converter.DefaultTemplateConfigurationConverter;
import com.maneo.kosc.ws.rest.provided.vo.DefaultTemplateConfigurationVo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages defaultTemplateConfiguration services")
@RestController
@RequestMapping("api/chercheur/defaultTemplateConfiguration")
public class DefaultTemplateConfigurationRestChercheur {

    @Autowired
    private DefaultTemplateConfigurationChercheurService defaultTemplateConfigurationService;

    @Autowired
    private DefaultTemplateConfigurationConverter defaultTemplateConfigurationConverter;


    @ApiOperation("Updates the specified  defaultTemplateConfiguration")
    @PutMapping("/")
    public DefaultTemplateConfigurationVo update(@RequestBody DefaultTemplateConfigurationVo defaultTemplateConfigurationVo) {
        DefaultTemplateConfiguration defaultTemplateConfiguration = defaultTemplateConfigurationConverter.toItem(defaultTemplateConfigurationVo);
        defaultTemplateConfiguration = defaultTemplateConfigurationService.update(defaultTemplateConfiguration);
        return defaultTemplateConfigurationConverter.toVo(defaultTemplateConfiguration);
    }

    @ApiOperation("Finds a list of all defaultTemplateConfigurations")
    @GetMapping("/")
    public List<DefaultTemplateConfigurationVo> findAll() {
        return defaultTemplateConfigurationConverter.toVo(defaultTemplateConfigurationService.findAll());
    }

    @ApiOperation("Finds a defaultTemplateConfiguration with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DefaultTemplateConfigurationVo findByIdWithAssociatedList(@PathVariable Long id) {
        return defaultTemplateConfigurationConverter.toVo(defaultTemplateConfigurationService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search defaultTemplateConfiguration by a specific criteria")
    @PostMapping("/search")
    public List<DefaultTemplateConfigurationVo> findByCriteria(@RequestBody DefaultTemplateConfigurationVo defaultTemplateConfigurationVo) {
        return defaultTemplateConfigurationConverter.toVo(defaultTemplateConfigurationService.findByCriteria(defaultTemplateConfigurationVo));
    }

    @ApiOperation("Finds a defaultTemplateConfiguration by id")
    @GetMapping("/id/{id}")
    public DefaultTemplateConfigurationVo findById(@PathVariable Long id) {
        return defaultTemplateConfigurationConverter.toVo(defaultTemplateConfigurationService.findById(id));
    }

    @ApiOperation("Saves the specified  defaultTemplateConfiguration")
    @PostMapping("/")
    public DefaultTemplateConfigurationVo save(@RequestBody DefaultTemplateConfigurationVo defaultTemplateConfigurationVo) {
        DefaultTemplateConfiguration defaultTemplateConfiguration = defaultTemplateConfigurationConverter.toItem(defaultTemplateConfigurationVo);
        defaultTemplateConfiguration = defaultTemplateConfigurationService.save(defaultTemplateConfiguration);
        return defaultTemplateConfigurationConverter.toVo(defaultTemplateConfiguration);
    }

    @ApiOperation("Delete the specified defaultTemplateConfiguration")
    @DeleteMapping("/")
    public int delete(@RequestBody DefaultTemplateConfigurationVo defaultTemplateConfigurationVo) {
        DefaultTemplateConfiguration defaultTemplateConfiguration = defaultTemplateConfigurationConverter.toItem(defaultTemplateConfigurationVo);
        return defaultTemplateConfigurationService.delete(defaultTemplateConfiguration);
    }

    @ApiOperation("Deletes a defaultTemplateConfiguration by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteById(id);
    }

    @ApiOperation("find by templateEmailFtl id")
    @GetMapping("/templateEmailFtl/id/{id}")
    public List<DefaultTemplateConfiguration> findByTemplateEmailFtlId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.findByTemplateEmailFtlId(id);
    }

    @ApiOperation("delete by templateEmailFtl id")
    @DeleteMapping("/templateEmailFtl/id/{id}")
    public int deleteByTemplateEmailFtlId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteByTemplateEmailFtlId(id);
    }

    @ApiOperation("find by templateEmailCloture id")
    @GetMapping("/templateEmailCloture/id/{id}")
    public List<DefaultTemplateConfiguration> findByTemplateEmailClotureId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.findByTemplateEmailClotureId(id);
    }

    @ApiOperation("delete by templateEmailCloture id")
    @DeleteMapping("/templateEmailCloture/id/{id}")
    public int deleteByTemplateEmailClotureId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteByTemplateEmailClotureId(id);
    }

    @ApiOperation("find by templateSuivi id")
    @GetMapping("/templateSuivi/id/{id}")
    public List<DefaultTemplateConfiguration> findByTemplateSuiviId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.findByTemplateSuiviId(id);
    }

    @ApiOperation("delete by templateSuivi id")
    @DeleteMapping("/templateSuivi/id/{id}")
    public int deleteByTemplateSuiviId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteByTemplateSuiviId(id);
    }

    @ApiOperation("find by templateEmailClientInjoinable id")
    @GetMapping("/templateEmailClientInjoinable/id/{id}")
    public List<DefaultTemplateConfiguration> findByTemplateEmailClientInjoinableId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.findByTemplateEmailClientInjoinableId(id);
    }

    @ApiOperation("delete by templateEmailClientInjoinable id")
    @DeleteMapping("/templateEmailClientInjoinable/id/{id}")
    public int deleteByTemplateEmailClientInjoinableId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteByTemplateEmailClientInjoinableId(id);
    }

    @ApiOperation("find by templateEmailReport id")
    @GetMapping("/templateEmailReport/id/{id}")
    public List<DefaultTemplateConfiguration> findByTemplateEmailReportId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.findByTemplateEmailReportId(id);
    }

    @ApiOperation("delete by templateEmailReport id")
    @DeleteMapping("/templateEmailReport/id/{id}")
    public int deleteByTemplateEmailReportId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteByTemplateEmailReportId(id);
    }

    @ApiOperation("find by templateEmailPlanification id")
    @GetMapping("/templateEmailPlanification/id/{id}")
    public List<DefaultTemplateConfiguration> findByTemplateEmailPlanificationId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.findByTemplateEmailPlanificationId(id);
    }

    @ApiOperation("delete by templateEmailPlanification id")
    @DeleteMapping("/templateEmailPlanification/id/{id}")
    public int deleteByTemplateEmailPlanificationId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteByTemplateEmailPlanificationId(id);
    }

    @ApiOperation("find by templateEmailReplanification id")
    @GetMapping("/templateEmailReplanification/id/{id}")
    public List<DefaultTemplateConfiguration> findByTemplateEmailReplanificationId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.findByTemplateEmailReplanificationId(id);
    }

    @ApiOperation("delete by templateEmailReplanification id")
    @DeleteMapping("/templateEmailReplanification/id/{id}")
    public int deleteByTemplateEmailReplanificationId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteByTemplateEmailReplanificationId(id);
    }

    @ApiOperation("find by templateEmailRefus id")
    @GetMapping("/templateEmailRefus/id/{id}")
    public List<DefaultTemplateConfiguration> findByTemplateEmailRefusId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.findByTemplateEmailRefusId(id);
    }

    @ApiOperation("delete by templateEmailRefus id")
    @DeleteMapping("/templateEmailRefus/id/{id}")
    public int deleteByTemplateEmailRefusId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteByTemplateEmailRefusId(id);
    }

    @ApiOperation("find by templateEmailClientInjoinableKosc id")
    @GetMapping("/templateEmailClientInjoinableKosc/id/{id}")
    public List<DefaultTemplateConfiguration> findByTemplateEmailClientInjoinableKoscId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.findByTemplateEmailClientInjoinableKoscId(id);
    }

    @ApiOperation("delete by templateEmailClientInjoinableKosc id")
    @DeleteMapping("/templateEmailClientInjoinableKosc/id/{id}")
    public int deleteByTemplateEmailClientInjoinableKoscId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteByTemplateEmailClientInjoinableKoscId(id);
    }

    @ApiOperation("find by templateEmailConfirmationClient id")
    @GetMapping("/templateEmailConfirmationClient/id/{id}")
    public List<DefaultTemplateConfiguration> findByTemplateEmailConfirmationClientId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.findByTemplateEmailConfirmationClientId(id);
    }

    @ApiOperation("delete by templateEmailConfirmationClient id")
    @DeleteMapping("/templateEmailConfirmationClient/id/{id}")
    public int deleteByTemplateEmailConfirmationClientId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteByTemplateEmailConfirmationClientId(id);
    }

    @ApiOperation("find by templateEmailMauvaisContact id")
    @GetMapping("/templateEmailMauvaisContact/id/{id}")
    public List<DefaultTemplateConfiguration> findByTemplateEmailMauvaisContactId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.findByTemplateEmailMauvaisContactId(id);
    }

    @ApiOperation("delete by templateEmailMauvaisContact id")
    @DeleteMapping("/templateEmailMauvaisContact/id/{id}")
    public int deleteByTemplateEmailMauvaisContactId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteByTemplateEmailMauvaisContactId(id);
    }

    @ApiOperation("find by templateEmailCri id")
    @GetMapping("/templateEmailCri/id/{id}")
    public List<DefaultTemplateConfiguration> findByTemplateEmailCriId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.findByTemplateEmailCriId(id);
    }

    @ApiOperation("delete by templateEmailCri id")
    @DeleteMapping("/templateEmailCri/id/{id}")
    public int deleteByTemplateEmailCriId(@PathVariable Long id) {
        return defaultTemplateConfigurationService.deleteByTemplateEmailCriId(id);
    }


}
