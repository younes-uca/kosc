package com.maneo.kosc.ws.rest.provided.facade.admin.kosc;


import com.maneo.kosc.bean.kosc.OrdreKosc;
import com.maneo.kosc.service.admin.facade.kosc.*;
import com.maneo.kosc.ws.rest.provided.converter.kosc.OrdreKoscConverter;
import com.maneo.kosc.ws.rest.provided.vo.kosc.OrdreKoscVo;
import com.maneo.kosc.ws.rest.provided.vo.StatisticResultVo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Date;
import java.util.List;

import static java.nio.file.Files.copy;
import static java.nio.file.Paths.get;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;
import static org.springframework.http.HttpHeaders.CONTENT_DISPOSITION;


@Api("Manages ordreKosc services")
@RestController
@RequestMapping("api/admin/ordreKosc")
public class OrdreKoscRestAdmin {


    @Autowired
    private OrdreKoscAdminService ordreKoscService;


    @Autowired
    private OrdreKoscPriseRdvAdminService ordreKoscPriseRdvService;
    @Autowired
    private OrdreKoscCddAdminService ordreKoscCddAdminService;

    @Autowired
    private OrdreKoscImportAdminService ordreKoscImportAdminService;
    @Autowired
    private OrderKoscEmailingAdminService orderKoscEmailingAdminService;

    @Autowired
    private OrdreKoscConverter ordreKoscConverter;
    @Autowired
    private OrdreKoscSuivRdvAdminService ordreKoscSuiviRdvService;
    @Autowired
    private OrdreKoscSuiviCddAdminService ordreKoscSuiviCddAdminService;
    @Autowired
    private OrderKoscBoiteEmailAdminService orderKoscBoiteEmailAdminService;

    @GetMapping("/calculerStatistic/submissionDateMin/{submissionDateMin}/submissionDateMax/{submissionDateMax}")
    public List<StatisticResultVo> calculerStatistic(@PathVariable Date submissionDateMin, @PathVariable Date submissionDateMax) {
        return ordreKoscService.calculerStatistic(submissionDateMin, submissionDateMax);
    }

    @PostMapping("/send/confirmation/client")
    public OrdreKoscVo sendConfirmationEmailToClient(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendConfirmationEmailToClient(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @PostMapping("/send/mail/planification")
    public OrdreKoscVo sendMailPlanificationEmail(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendMailPlanificationEmail(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @PostMapping("/send/client/injoignable/client")
    public OrdreKoscVo sendClientInjoignableEmailToClient(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendClientInjoignableEmailToClient(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @PostMapping("/send/client/injoignable/kosc")
    public OrdreKoscVo sendClientInjoignableEmailToKosc(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendClientInjoignableEmailToKosc(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @PostMapping("/send/mauvais/contact")
    public OrdreKoscVo sendMauvaisContactEmail(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendMauvaisContactEmail(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @PostMapping("/send/refus/client")
    public OrdreKoscVo sendRefusClientEmail(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendRefusClientEmail(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @PostMapping("/send/autre")
    public OrdreKoscVo sendAutreEmail(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendAutreEmail(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }



    @PostMapping("/send/mail/replanification")
    public OrdreKoscVo sendMailReplanification(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendMailReplanification(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }


    @ApiOperation("Finds a list of specific ordreKoscs")
    @GetMapping("/suivi/")
    public List<OrdreKoscVo> findSuivi() {
        return ordreKoscConverter.toVo(ordreKoscService.findSuivi());
    }

    @ApiOperation("Update etat to ko or ok")
    @PutMapping("/update-etat/")
    public OrdreKoscVo updateEtat(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        OrdreKoscVo ordreKoscVo1 = ordreKoscConverter.toVo(ordreKoscSuiviRdvService.updateEtat(ordreKosc));
        return ordreKoscVo1;
    }

    @ApiOperation("set date appel")
    @PutMapping("/edit-pas-encore/")
    public OrdreKoscVo editPasEncore(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        OrdreKoscVo ordreKoscVo1 = ordreKoscConverter.toVo(ordreKoscPriseRdvService.editPasEncore(ordreKosc));
        return ordreKoscVo1;
    }

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

    @ApiOperation("Search ordreKosc by a specific criteria")
    @PostMapping("/search-order-kosc-import")
    public List<OrdreKoscVo> findByCriteriaOrderKoscImport(@RequestBody OrdreKoscVo ordreKoscVo) {
        return ordreKoscConverter.toVo(ordreKoscService.findByCriteriaOrderKoscImport(ordreKoscVo));
    }


    @ApiOperation("Search ordreKosc prise rdv by a specific criteria")
    @PostMapping("/search-prise-rdv")
    public List<OrdreKoscVo> findByCriteriaPriseRdv(@RequestBody OrdreKoscVo ordreKoscVo) {

        return ordreKoscConverter.toVo(ordreKoscPriseRdvService.findByCriteriaPriseRdv(ordreKoscVo));
    }

    @ApiOperation("Search ordreKosc suivi historique by a specific criteria")
    @PostMapping("/search-suivi-cdd")
    public List<OrdreKoscVo> findByCriteriaCdd(@RequestBody OrdreKoscVo ordreKoscVo) {
        List<OrdreKoscVo> ordreKoscVos = ordreKoscConverter.toVo(ordreKoscCddAdminService.findByCriteriaCdd(ordreKoscVo));
        return ordreKoscVos;
    }

    @ApiOperation("Search ordreKosc suivi historique by a specific criteria")
    @PostMapping("/search-suivi-historique-cdd")
    public List<OrdreKoscVo> findByCriteriaSuiviCdd(@RequestBody OrdreKoscVo ordreKoscVo) {
        List<OrdreKoscVo> ordreKoscVos = ordreKoscConverter.toVo(ordreKoscSuiviCddAdminService.findByCriteriaSuiviCdd(ordreKoscVo));
        return ordreKoscVos;
    }

    @ApiOperation("Search ordreKosc suivi by a specific criteria")
    @PostMapping("/search/suivi")
    public List<OrdreKoscVo> findSuiviByCriteria(@RequestBody OrdreKoscVo ordreKoscVo) {
        return ordreKoscConverter.toVo(ordreKoscService.findSuiviByCriteria(ordreKoscVo));
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

    @ApiOperation("Saves the specified  ordreKosc")
    @PostMapping("/list")
    public List<OrdreKoscVo> save(@RequestBody List<OrdreKoscVo> ordreKoscVos) {
        List<OrdreKosc> ordreKoscs = ordreKoscConverter.toItem(ordreKoscVos);
        ordreKoscs = ordreKoscService.save(ordreKoscs);
        return ordreKoscConverter.toVo(ordreKoscs);
    }


    @ApiOperation("import all")
    @PostMapping("/import-all")
    public List<OrdreKoscVo> importAll(@RequestBody List<OrdreKoscVo> ordreKoscVos) {
        List<OrdreKosc> ordreKoscs = ordreKoscConverter.toItem(ordreKoscVos);
        ordreKoscs = ordreKoscImportAdminService.importAll(ordreKoscs);
        return ordreKoscConverter.toVo(ordreKoscs);
    }

    @ApiOperation("import the dataBase file")
    @PostMapping("/import-data-base")
    public List<OrdreKoscVo> importerDataBase(@RequestBody List<OrdreKoscVo> ordreKoscVos) {
        List<OrdreKosc> ordreKoscs = ordreKoscConverter.toItem(ordreKoscVos);
        ordreKoscs = ordreKoscImportAdminService.importerDataBase(ordreKoscs);
        return ordreKoscConverter.toVo(ordreKoscs);
    }

    @ApiOperation("upload the pdf file")
    @PostMapping("/upload")
  /*  public static String uploadFile(MultipartFile file) throws IOException {
        String fullPath=null;
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        Path uploadedDirectory = Paths.get("D:\\uploads\\");
        try(InputStream inputStream =file.getInputStream()){
            Path filePath = uploadedDirectory.resolve(filename);
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
            fullPath=filePath.toFile().getAbsolutePath();
        } catch (IOException e) {
            throw new IOException("Can't save the file: "+filename);
        }
        return filename;
    }*/

    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        //String filename = new ArrayList<>();
        //for(MultipartFile file : multipartFiles) {
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        Path fileStorage = get("D:\\uploads\\", filename).toAbsolutePath().normalize();
        copy(file.getInputStream(), fileStorage, REPLACE_EXISTING);
        //filenames.add(filename);}
        return ResponseEntity.ok().body(filename);
    }

    @ApiOperation("download the pdf file")
    @GetMapping("download/{filename}")
    public ResponseEntity<Resource> downloadFiles(@PathVariable("filename") String filename) throws IOException {
        Path filePath = get("D:\\uploads\\").toAbsolutePath().normalize().resolve(filename);
        if (!Files.exists(filePath)) {
            throw new FileNotFoundException(filename + " was not found on the server");
        }
        Resource resource = new UrlResource(filePath.toUri());
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("File-Name", filename);
        httpHeaders.add(CONTENT_DISPOSITION, "attachment;File-Name=" + resource.getFilename());
        return ResponseEntity.ok().contentType(MediaType.parseMediaType(Files.probeContentType(filePath))).headers(httpHeaders).body(resource);
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

    @ApiOperation("Search ordreKosc suivi by a specific criteria")
    @PostMapping("/search-suivi-rdv")
    public List<OrdreKoscVo> findByCriteriaSuiviRdv(@RequestBody OrdreKoscVo ordreKoscVo) {
        List<OrdreKosc> criteriaSuiviRdv = ordreKoscSuiviRdvService.findByCriteriaSuiviRdv(ordreKoscVo);
        return ordreKoscConverter.toVo(criteriaSuiviRdv);
    }

    @PostMapping("/send-mail-report-demande-maneo-client-injoignable")
    public OrdreKoscVo sendMailReportDemandeManeoClientInjoignable(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendMailReportDemandeManeoClientInjoignable(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @PostMapping("/send-mail-report-demande-maneo-client-joignable-accepte")
    public OrdreKoscVo sendMailReportDemandeManeoClientJoignableAccepte(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendMailReportDemandeManeoClientJoignableAccepte(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @PostMapping("/send-mail-report-demande-maneo-client-joignable-refus")
    public OrdreKoscVo sendMailReportDemandeManeoClientJoignableRefus(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendMailReportDemandeManeoClientJoignableRefus(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @PostMapping("/send-mail-report-demande-client-client-injoignable")
    public OrdreKoscVo sendMailReportDemandeClientClientInjoignable(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendMailReportDemandeClientClientInjoignable(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @PostMapping("/send-mail-report-demande-client-client-joignable")
    public OrdreKoscVo sendMailReportDemandeClientClientJoignable(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendMailReportDemandeClientClientJoignable(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }
     @PostMapping("/send-mail-cri")
    public OrdreKoscVo sendMailCri(@RequestBody OrdreKoscVo ordreKoscVo) {
        OrdreKosc ordreKosc = ordreKoscConverter.toItem(ordreKoscVo);
        orderKoscEmailingAdminService.sendMailCri(ordreKosc);
        return ordreKoscConverter.toVo(ordreKosc);
    }

    @PostMapping("/find-email")
    public List<OrdreKoscVo> findEmail(@RequestBody OrdreKoscVo ordreKoscVo) {
        List<OrdreKosc> ordreKoscs = orderKoscBoiteEmailAdminService.findEmail(ordreKoscVo);
        return ordreKoscConverter.toVo(ordreKoscs);
    }

    @GetMapping("/find-by-year-month/year/{annee}/month/{mois}")
    public List<OrdreKoscVo> findByYearAndMonth(@PathVariable int annee, @PathVariable int mois) {
        return ordreKoscConverter.toVo(ordreKoscService.findByYearAndMonth(annee, mois));


    }
}
