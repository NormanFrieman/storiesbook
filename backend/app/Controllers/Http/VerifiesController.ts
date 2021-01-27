// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

export default class VerifiesController {
    public async database ({ response }) {
        const report = await HealthCheck.getReport();
        
        return report.healthy ? response.ok(report) : response.badRequest(report);
    };
}
