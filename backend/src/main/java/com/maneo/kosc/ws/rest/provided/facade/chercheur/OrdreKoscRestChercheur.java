package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.OrdreKoscChercheurService;

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
import com.maneo.kosc.bean.kosc.OrdreKosc;
import com.maneo.kosc.ws.rest.provided.converter.OrdreKoscConverter;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;

@Api("Manages ordreKosc services")
@RestController
@RequestMapping("api/chercheur/ordreKosc")
public class OrdreKoscRestChercheur {

    @Autowired
    private OrdreKoscChercheurService ordreKoscService;

    @Autowired
    private OrdreKoscConverter ordreKoscConverter;


    @ApiOperation("Updates the specified  ordreKosc")
    @PutMapping("/")
    public OrdreKoscVo update(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        ordreKosc = ordreKoscService.update(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @ApiOperation("Finds a list of all ordreKoscs")
    @GetMapping("/")
    public List<OrdreKoscVo> findAll() {
        return ordreKoscConverter.toVo(ordreKoscService.findAll());
    }

    @ApiOperation("Finds a ordreKosc with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public OrdreKoscVo findByIdWithAssociatedList(@PathVariable Long id) {
        return ordreKoscConverter.toVo(ordreKoscService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search ordreKosc by a specific criteria")
    @PostMapping("/search")
    public List<OrdreKoscVo> findByCriteria(@RequestBody OrdreKoscVo ordreKoscVo) {
        return ordreKoscConverter.toVo(ordreKoscService.findByCriteria(ordreKoscVo));
    }

    @ApiOperation("Finds a ordreKosc by id")
    @GetMapping("/id/{id}")
    public OrdreKoscVo findById(@PathVariable Long id) {
        return ordreKoscConverter.toVo(ordreKoscService.findById(id));
    }

    @ApiOperation("Saves the specified  ordreKosc")
    @PostMapping("/")
    public OrdreKoscVo save(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        ordreKosc = ordreKoscService.save(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @ApiOperation("Delete the specified ordreKosc")
    @DeleteMapping("/")
    public int delete(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        return ordreKoscService.delete(ordreKosc);
    }

    @ApiOperation("Deletes a ordreKosc by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return ordreKoscService.deleteById(id);
    }

    @ApiOperation("find by operator reference")
    @GetMapping("/operator/reference/{reference}")
    public List<OrdreKosc> findByOperatorReference(@PathVariable String reference) {
        return ordreKoscService.findByOperatorReference(reference);
    }

    @ApiOperation("delete by operator reference")
    @DeleteMapping("/operator/reference/{reference}")
    public int deleteByOperatorReference(@PathVariable String reference) {
        return ordreKoscService.deleteByOperatorReference(reference);
    }

    @ApiOperation("find by operator id")
    @GetMapping("/operator/id/{id}")
    public List<OrdreKosc> findByOperatorId(@PathVariable Long id) {
        return ordreKoscService.findByOperatorId(id);
    }

    @ApiOperation("delete by operator id")
    @DeleteMapping("/operator/id/{id}")
    public int deleteByOperatorId(@PathVariable Long id) {
        return ordreKoscService.deleteByOperatorId(id);
    }

    @ApiOperation("find by departement code")
    @GetMapping("/departement/code/{code}")
    public List<OrdreKosc> findByDepartementCode(@PathVariable String code) {
        return ordreKoscService.findByDepartementCode(code);
    }

    @ApiOperation("delete by departement code")
    @DeleteMapping("/departement/code/{code}")
    public int deleteByDepartementCode(@PathVariable String code) {
        return ordreKoscService.deleteByDepartementCode(code);
    }

    @ApiOperation("find by departement id")
    @GetMapping("/departement/id/{id}")
    public List<OrdreKosc> findByDepartementId(@PathVariable Long id) {
        return ordreKoscService.findByDepartementId(id);
    }

    @ApiOperation("delete by departement id")
    @DeleteMapping("/departement/id/{id}")
    public int deleteByDepartementId(@PathVariable Long id) {
        return ordreKoscService.deleteByDepartementId(id);
    }

    @ApiOperation("find by technicien identifiant")
    @GetMapping("/technicien/identifiant/{identifiant}")
    public List<OrdreKosc> findByTechnicienIdentifiant(@PathVariable String identifiant) {
        return ordreKoscService.findByTechnicienIdentifiant(identifiant);
    }

    @ApiOperation("delete by technicien identifiant")
    @DeleteMapping("/technicien/identifiant/{identifiant}")
    public int deleteByTechnicienIdentifiant(@PathVariable String identifiant) {
        return ordreKoscService.deleteByTechnicienIdentifiant(identifiant);
    }

    @ApiOperation("find by technicien id")
    @GetMapping("/technicien/id/{id}")
    public List<OrdreKosc> findByTechnicienId(@PathVariable Long id) {
        return ordreKoscService.findByTechnicienId(id);
    }

    @ApiOperation("delete by technicien id")
    @DeleteMapping("/technicien/id/{id}")
    public int deleteByTechnicienId(@PathVariable Long id) {
        return ordreKoscService.deleteByTechnicienId(id);
    }

    @ApiOperation("find by templateEmailPlanification id")
    @GetMapping("/templateEmailPlanification/id/{id}")
    public List<OrdreKosc> findByTemplateEmailPlanificationId(@PathVariable Long id) {
        return ordreKoscService.findByTemplateEmailPlanificationId(id);
    }

    @ApiOperation("delete by templateEmailPlanification id")
    @DeleteMapping("/templateEmailPlanification/id/{id}")
    public int deleteByTemplateEmailPlanificationId(@PathVariable Long id) {
        return ordreKoscService.deleteByTemplateEmailPlanificationId(id);
    }



    @ApiOperation("find by templateEmailReplanification id")
    @GetMapping("/templateEmailReplanification/id/{id}")
    public List<OrdreKosc> findByTemplateEmailReplanificationId(@PathVariable Long id) {
        return ordreKoscService.findByTemplateEmailReplanificationId(id);
    }

    @ApiOperation("delete by templateEmailReplanification id")
    @DeleteMapping("/templateEmailReplanification/id/{id}")
    public int deleteByTemplateEmailReplanificationId(@PathVariable Long id) {
        return ordreKoscService.deleteByTemplateEmailReplanificationId(id);
    }

    @ApiOperation("find by templateEmailRefus id")
    @GetMapping("/templateEmailRefus/id/{id}")
    public List<OrdreKosc> findByTemplateEmailRefusId(@PathVariable Long id) {
        return ordreKoscService.findByTemplateEmailRefusId(id);
    }

    @ApiOperation("delete by templateEmailRefus id")
    @DeleteMapping("/templateEmailRefus/id/{id}")
    public int deleteByTemplateEmailRefusId(@PathVariable Long id) {
        return ordreKoscService.deleteByTemplateEmailRefusId(id);
    }

    @ApiOperation("find by templateEmailMauvaisContact id")
    @GetMapping("/templateEmailMauvaisContact/id/{id}")
    public List<OrdreKosc> findByTemplateEmailMauvaisContactId(@PathVariable Long id) {
        return ordreKoscService.findByTemplateEmailMauvaisContactId(id);
    }

    @ApiOperation("delete by templateEmailMauvaisContact id")
    @DeleteMapping("/templateEmailMauvaisContact/id/{id}")
    public int deleteByTemplateEmailMauvaisContactId(@PathVariable Long id) {
        return ordreKoscService.deleteByTemplateEmailMauvaisContactId(id);
    }

    @ApiOperation("find by templateEmailConfirmationClient id")
    @GetMapping("/templateEmailConfirmationClient/id/{id}")
    public List<OrdreKosc> findByTemplateEmailConfirmationClientId(@PathVariable Long id) {
        return ordreKoscService.findByTemplateEmailConfirmationClientId(id);
    }

    @ApiOperation("delete by templateEmailConfirmationClient id")
    @DeleteMapping("/templateEmailConfirmationClient/id/{id}")
    public int deleteByTemplateEmailConfirmationClientId(@PathVariable Long id) {
        return ordreKoscService.deleteByTemplateEmailConfirmationClientId(id);
    }

    @ApiOperation("find by templateEmailCri id")
    @GetMapping("/templateEmailCri/id/{id}")
    public List<OrdreKosc> findByTemplateEmailCriId(@PathVariable Long id) {
        return ordreKoscService.findByTemplateEmailCriId(id);
    }

    @ApiOperation("delete by templateEmailCri id")
    @DeleteMapping("/templateEmailCri/id/{id}")
    public int deleteByTemplateEmailCriId(@PathVariable Long id) {
        return ordreKoscService.deleteByTemplateEmailCriId(id);
    }

    @ApiOperation("find by templateEmailFtl id")
    @GetMapping("/templateEmailFtl/id/{id}")
    public List<OrdreKosc> findByTemplateEmailFtlId(@PathVariable Long id) {
        return ordreKoscService.findByTemplateEmailFtlId(id);
    }

    @ApiOperation("delete by templateEmailFtl id")
    @DeleteMapping("/templateEmailFtl/id/{id}")
    public int deleteByTemplateEmailFtlId(@PathVariable Long id) {
        return ordreKoscService.deleteByTemplateEmailFtlId(id);
    }

    @ApiOperation("find by templateEmailClientInjoinable id")
    @GetMapping("/templateEmailClientInjoinable/id/{id}")
    public List<OrdreKosc> findByTemplateEmailClientInjoinableId(@PathVariable Long id) {
        return ordreKoscService.findByTemplateEmailClientInjoinableId(id);
    }

    @ApiOperation("delete by templateEmailClientInjoinable id")
    @DeleteMapping("/templateEmailClientInjoinable/id/{id}")
    public int deleteByTemplateEmailClientInjoinableId(@PathVariable Long id) {
        return ordreKoscService.deleteByTemplateEmailClientInjoinableId(id);
    }

    @ApiOperation("find by templateEmailClientInjoinableKosc id")
    @GetMapping("/templateEmailClientInjoinableKosc/id/{id}")
    public List<OrdreKosc> findByTemplateEmailClientInjoinableKoscId(@PathVariable Long id) {
        return ordreKoscService.findByTemplateEmailClientInjoinableKoscId(id);
    }

    @ApiOperation("delete by templateEmailClientInjoinableKosc id")
    @DeleteMapping("/templateEmailClientInjoinableKosc/id/{id}")
    public int deleteByTemplateEmailClientInjoinableKoscId(@PathVariable Long id) {
        return ordreKoscService.deleteByTemplateEmailClientInjoinableKoscId(id);
    }

    @ApiOperation("find by etatDemandeKosc code")
    @GetMapping("/etatDemandeKosc/code/{code}")
    public List<OrdreKosc> findByEtatDemandeKoscCode(@PathVariable String code) {
        return ordreKoscService.findByEtatDemandeKoscCode(code);
    }

    @ApiOperation("delete by etatDemandeKosc code")
    @DeleteMapping("/etatDemandeKosc/code/{code}")
    public int deleteByEtatDemandeKoscCode(@PathVariable String code) {
        return ordreKoscService.deleteByEtatDemandeKoscCode(code);
    }

    @ApiOperation("find by etatDemandeKosc id")
    @GetMapping("/etatDemandeKosc/id/{id}")
    public List<OrdreKosc> findByEtatDemandeKoscId(@PathVariable Long id) {
        return ordreKoscService.findByEtatDemandeKoscId(id);
    }

    @ApiOperation("delete by etatDemandeKosc id")
    @DeleteMapping("/etatDemandeKosc/id/{id}")
    public int deleteByEtatDemandeKoscId(@PathVariable Long id) {
        return ordreKoscService.deleteByEtatDemandeKoscId(id);
    }

    @ApiOperation("find by templateEmailCloture id")
    @GetMapping("/templateEmailCloture/id/{id}")
    public List<OrdreKosc> findByTemplateEmailClotureId(@PathVariable Long id) {
        return ordreKoscService.findByTemplateEmailClotureId(id);
    }

    @ApiOperation("delete by templateEmailCloture id")
    @DeleteMapping("/templateEmailCloture/id/{id}")
    public int deleteByTemplateEmailClotureId(@PathVariable Long id) {
        return ordreKoscService.deleteByTemplateEmailClotureId(id);
    }

    @ApiOperation("find by templateSuivi id")
    @GetMapping("/templateSuivi/id/{id}")
    public List<OrdreKosc> findByTemplateSuiviId(@PathVariable Long id) {
        return ordreKoscService.findByTemplateSuiviId(id);
    }

    @ApiOperation("delete by templateSuivi id")
    @DeleteMapping("/templateSuivi/id/{id}")
    public int deleteByTemplateSuiviId(@PathVariable Long id) {
        return ordreKoscService.deleteByTemplateSuiviId(id);
    }

    @ApiOperation("find by causeKoOk code")
    @GetMapping("/causeKoOk/code/{code}")
    public List<OrdreKosc> findByCauseKoOkCode(@PathVariable String code) {
        return ordreKoscService.findByCauseKoOkCode(code);
    }

    @ApiOperation("delete by causeKoOk code")
    @DeleteMapping("/causeKoOk/code/{code}")
    public int deleteByCauseKoOkCode(@PathVariable String code) {
        return ordreKoscService.deleteByCauseKoOkCode(code);
    }

    @ApiOperation("find by causeKoOk id")
    @GetMapping("/causeKoOk/id/{id}")
    public List<OrdreKosc> findByCauseKoOkId(@PathVariable Long id) {
        return ordreKoscService.findByCauseKoOkId(id);
    }

    @ApiOperation("delete by causeKoOk id")
    @DeleteMapping("/causeKoOk/id/{id}")
    public int deleteByCauseKoOkId(@PathVariable Long id) {
        return ordreKoscService.deleteByCauseKoOkId(id);
    }

    @ApiOperation("find by sourceReplanification code")
    @GetMapping("/sourceReplanification/code/{code}")
    public List<OrdreKosc> findBySourceReplanificationCode(@PathVariable String code) {
        return ordreKoscService.findBySourceReplanificationCode(code);
    }

    @ApiOperation("delete by sourceReplanification code")
    @DeleteMapping("/sourceReplanification/code/{code}")
    public int deleteBySourceReplanificationCode(@PathVariable String code) {
        return ordreKoscService.deleteBySourceReplanificationCode(code);
    }

    @ApiOperation("find by sourceReplanification id")
    @GetMapping("/sourceReplanification/id/{id}")
    public List<OrdreKosc> findBySourceReplanificationId(@PathVariable Long id) {
        return ordreKoscService.findBySourceReplanificationId(id);
    }

    @ApiOperation("delete by sourceReplanification id")
    @DeleteMapping("/sourceReplanification/id/{id}")
    public int deleteBySourceReplanificationId(@PathVariable Long id) {
        return ordreKoscService.deleteBySourceReplanificationId(id);
    }


}
