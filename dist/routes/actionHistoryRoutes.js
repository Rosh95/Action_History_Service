"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actionHistoryController_1 = require("../controllers/actionHistoryController");
const router = (0, express_1.Router)();
router.get('/action-history', actionHistoryController_1.listActionHistories);
exports.default = router;
