import {TemplateEmailReplanificationVo} from './TemplateEmailReplanification.model';
import {TemplateEmailFtlVo} from './TemplateEmailFtl.model';
import {TemplateEmailClotureVo} from './TemplateEmailCloture.model';
import {TemplateEmailPlanificationVo} from './TemplateEmailPlanification.model';
import {TemplateSuiviVo} from './TemplateSuivi.model';
import {TemplateEmailRefusVo} from './TemplateEmailRefus.model';
import {TemplateEmailConfirmationClientVo} from './TemplateEmailConfirmationClient.model';
import {TemplateEmailReportVo} from './TemplateEmailReport.model';
import {TemplateEmailClientInjoinableKoscVo} from './TemplateEmailClientInjoinableKosc.model';
import {TemplateEmailMauvaisContactVo} from './TemplateEmailMauvaisContact.model';
import {TemplateEmailClientInjoinableVo} from './TemplateEmailClientInjoinable.model';
import {TemplateEmailCriVo} from './TemplateEmailCri.model';
import {
    TemplateEmailReportDemandeManeoClientInjoignableVo
} from "./TemplateEmailReportDemandeManeoClientInjoignable.model";
import {
    TemplateEmailReportDemandeManeoClientJoignableRefusVo
} from "./TemplateEmailReportDemandeManeoClientJoignableRefus.model";
import {
    TemplateEmailReportDemandeManeoClientJoignableAccepteVo
} from "./TemplateEmailReportDemandeManeoClientJoignableAccepte.model";
import {
    TemplateEmailReportDemandeClientClientJoignableVo
} from "./TemplateEmailReportDemandeClientClientJoignable.model";
import {
    TemplateEmailReportDemandeClientClientInjoignableVo
} from "./TemplateEmailReportDemandeClientClientInjoignable.model";


export class DefaultTemplateConfigurationVo {

    public id: number;

    public emailKosc: string;
    public emailManeo: string;
    public enabled: null | boolean;
    public templateEmailFtlVo: TemplateEmailFtlVo;
    public templateEmailClotureVo: TemplateEmailClotureVo;
    public templateSuiviVo: TemplateSuiviVo;
    public templateEmailClientInjoinableVo: TemplateEmailClientInjoinableVo;
    public templateEmailReportVo: TemplateEmailReportVo;
    public templateEmailPlanificationVo: TemplateEmailPlanificationVo;
    public templateEmailReplanificationVo: TemplateEmailReplanificationVo;
    public templateEmailRefusVo: TemplateEmailRefusVo;
    public templateEmailClientInjoinableKoscVo: TemplateEmailClientInjoinableKoscVo;
    public templateEmailConfirmationClientVo: TemplateEmailConfirmationClientVo;
    public templateEmailMauvaisContactVo: TemplateEmailMauvaisContactVo;
    public templateEmailCriVo: TemplateEmailCriVo;
    public templateEmailReportDemandeManeoClientInjoignableVo: TemplateEmailReportDemandeManeoClientInjoignableVo;
    public templateEmailReportDemandeManeoClientJoignableAccepteVo: TemplateEmailReportDemandeManeoClientJoignableAccepteVo;
    public templateEmailReportDemandeManeoClientJoignableRefusVo: TemplateEmailReportDemandeManeoClientJoignableRefusVo;
    public templateEmailReportDemandeClientClientJoignableVo: TemplateEmailReportDemandeClientClientJoignableVo;
    public templateEmailReportDemandeClientClientInjoignableVo: TemplateEmailReportDemandeClientClientInjoignableVo;

}
