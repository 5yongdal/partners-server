'use strict';

var mongoos = require('mongoose'),
    Schema = mongoos.Schema;

var UserSchema = new Schema({
    // 사번
    user_id: {
        type: String,
        Required: 'Pleased enter'
    },
    // 닉네임
    user_name: {
        type: String,
        Required: 'Pleased enter'
    },
    // 관리자 권한
    authority: {
        type: Boolean
    },
    // 가입일
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoos.model('USERS', UserSchema);