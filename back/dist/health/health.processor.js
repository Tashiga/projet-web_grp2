"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthProcessor = void 0;
const bull_1 = require("@nestjs/bull");
let HealthProcessor = class HealthProcessor {
    constructor() {
        this.messages = [];
    }
    handleHealthCheck(job) {
        console.log('Processing job', job.id, 'with data', job.data);
    }
    async handleSendMessage(job) {
        const message = job.data;
        this.messages.push(message);
        console.log('Message saved:', message);
    }
};
exports.HealthProcessor = HealthProcessor;
__decorate([
    (0, bull_1.Process)('check-health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HealthProcessor.prototype, "handleHealthCheck", null);
__decorate([
    (0, bull_1.Process)('sendMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthProcessor.prototype, "handleSendMessage", null);
exports.HealthProcessor = HealthProcessor = __decorate([
    (0, bull_1.Processor)('health-queue')
], HealthProcessor);
//# sourceMappingURL=health.processor.js.map