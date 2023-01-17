const moment = require('moment');
const now = moment();
/**
 * 오늘 날짜의 글일 경우 N분 전 또는 N시간 전 등으로 표기
 * 오늘 이전의 날짜의 경우엔 YYYY-MM-DD 형식으로 표기
 * @author ywe
 * @date 2023-01-14
 * @param {string} date 'YYYY-MM-DD HH:mm:ss 형식의 문자
 * @return {string} deltaTime 반환, moment 형식
 */
exports.dateFromNow = (date) => {
    let currentSubHour = moment().add(-1, 'hour');  // current time subtracted by a day
    let currentSubDay = moment().add(-1, 'day');    // current time subtracted by an hour
    let feedDate = moment(date);

    if(feedDate.isAfter(currentSubHour)) {
        let deltaTime = feedDate.subtract(currentSubHour)
        return deltaTime
    } else if (feedDate.isAfter(currentSubDay)) {
        let deltaTime = feedDate.subtract(currentSubDay)
        return deltaTime
    } else {
        return (`Err : Unable to process time`);
    }

}

/**
 * 현재 등록한 글이 새 글인지 판단해주는 함수
 * 글을 작성한지 10분 이내의 글은 true를, 이후면 false를 반환
 * @author ywe
 * @date 2023-01-12
 * @param {string} date 'YYYY-MM-DD HH:mm:ss 형식의 문자
 * @return {boolean} '새 글이면 true, 아니면 false
 */
exports.isNewFeed = (date) => {
    let currentTime = moment().add(-10, 'minute');
    let feedDate = moment(date);
    console.log(currentTime);
    console.log(feedDate);

    return feedDate.isAfter(currentTime);
}
