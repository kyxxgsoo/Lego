// localStorage에서 테스크 일정 삭제 헬퍼 스크립트
// 브라우저 콘솔에서 실행하세요

// 1. 현재 저장된 모든 일정 확인
function viewAllSchedules() {
    const saved = localStorage.getItem('projectSchedules');
    if (!saved) {
        console.log('저장된 일정이 없습니다.');
        return [];
    }
    
    const data = JSON.parse(saved);
    const schedules = data.schedules || [];
    
    console.log(`총 ${schedules.length}개의 일정이 있습니다:`);
    schedules.forEach((schedule, index) => {
        console.log(`${index + 1}. [${schedule.id}] ${schedule.task?.소분류 || schedule.taskId} - ${schedule.userName || schedule.userId} (${schedule.startDate} ${schedule.startTime} ~ ${schedule.endDate} ${schedule.endTime})`);
    });
    
    return schedules;
}

// 2. 특정 일정 ID로 삭제
function deleteScheduleById(scheduleId) {
    const saved = localStorage.getItem('projectSchedules');
    if (!saved) {
        console.log('저장된 일정이 없습니다.');
        return false;
    }
    
    const data = JSON.parse(saved);
    const schedules = data.schedules || [];
    
    const beforeCount = schedules.length;
    data.schedules = schedules.filter(s => s.id !== scheduleId);
    const afterCount = data.schedules.length;
    
    if (beforeCount === afterCount) {
        console.log(`일정 ID "${scheduleId}"를 찾을 수 없습니다.`);
        return false;
    }
    
    localStorage.setItem('projectSchedules', JSON.stringify(data));
    console.log(`일정이 삭제되었습니다. (${beforeCount}개 → ${afterCount}개)`);
    return true;
}

// 3. 특정 테스크 ID의 모든 일정 삭제
function deleteSchedulesByTaskId(taskId) {
    const saved = localStorage.getItem('projectSchedules');
    if (!saved) {
        console.log('저장된 일정이 없습니다.');
        return false;
    }
    
    const data = JSON.parse(saved);
    const schedules = data.schedules || [];
    
    const beforeCount = schedules.length;
    data.schedules = schedules.filter(s => s.taskId !== taskId);
    const afterCount = data.schedules.length;
    const deletedCount = beforeCount - afterCount;
    
    if (deletedCount === 0) {
        console.log(`테스크 ID "${taskId}"에 해당하는 일정이 없습니다.`);
        return false;
    }
    
    localStorage.setItem('projectSchedules', JSON.stringify(data));
    console.log(`${deletedCount}개의 일정이 삭제되었습니다. (${beforeCount}개 → ${afterCount}개)`);
    return true;
}

// 4. 특정 사용자의 모든 일정 삭제
function deleteSchedulesByUser(userId) {
    const saved = localStorage.getItem('projectSchedules');
    if (!saved) {
        console.log('저장된 일정이 없습니다.');
        return false;
    }
    
    const data = JSON.parse(saved);
    const schedules = data.schedules || [];
    
    const beforeCount = schedules.length;
    data.schedules = schedules.filter(s => {
        return s.userId !== userId && s.userName !== userId && s.user !== userId;
    });
    const afterCount = data.schedules.length;
    const deletedCount = beforeCount - afterCount;
    
    if (deletedCount === 0) {
        console.log(`사용자 "${userId}"에 해당하는 일정이 없습니다.`);
        return false;
    }
    
    localStorage.setItem('projectSchedules', JSON.stringify(data));
    console.log(`${deletedCount}개의 일정이 삭제되었습니다. (${beforeCount}개 → ${afterCount}개)`);
    return true;
}

// 5. 특정 날짜 범위의 일정 삭제
function deleteSchedulesByDateRange(startDate, endDate) {
    const saved = localStorage.getItem('projectSchedules');
    if (!saved) {
        console.log('저장된 일정이 없습니다.');
        return false;
    }
    
    const data = JSON.parse(saved);
    const schedules = data.schedules || [];
    
    const beforeCount = schedules.length;
    data.schedules = schedules.filter(s => {
        return !(s.startDate >= startDate && s.startDate <= endDate);
    });
    const afterCount = data.schedules.length;
    const deletedCount = beforeCount - afterCount;
    
    if (deletedCount === 0) {
        console.log(`${startDate} ~ ${endDate} 범위의 일정이 없습니다.`);
        return false;
    }
    
    localStorage.setItem('projectSchedules', JSON.stringify(data));
    console.log(`${deletedCount}개의 일정이 삭제되었습니다. (${beforeCount}개 → ${afterCount}개)`);
    return true;
}

// 6. 특정 테스크의 특정 사용자 일정 삭제
function deleteSchedulesByTaskAndUser(taskId, userId) {
    const saved = localStorage.getItem('projectSchedules');
    if (!saved) {
        console.log('저장된 일정이 없습니다.');
        return false;
    }
    
    const data = JSON.parse(saved);
    const schedules = data.schedules || [];
    
    const beforeCount = schedules.length;
    data.schedules = schedules.filter(s => {
        const matchesTask = s.taskId === taskId;
        const matchesUser = s.userId === userId || s.userName === userId || s.user === userId;
        return !(matchesTask && matchesUser);
    });
    const afterCount = data.schedules.length;
    const deletedCount = beforeCount - afterCount;
    
    if (deletedCount === 0) {
        console.log(`테스크 ID "${taskId}"와 사용자 "${userId}"에 해당하는 일정이 없습니다.`);
        return false;
    }
    
    localStorage.setItem('projectSchedules', JSON.stringify(data));
    console.log(`${deletedCount}개의 일정이 삭제되었습니다. (${beforeCount}개 → ${afterCount}개)`);
    return true;
}

// 7. 특정 테스크의 특정 날짜 일정 삭제
function deleteSchedulesByTaskAndDate(taskId, date) {
    const saved = localStorage.getItem('projectSchedules');
    if (!saved) {
        console.log('저장된 일정이 없습니다.');
        return false;
    }
    
    const data = JSON.parse(saved);
    const schedules = data.schedules || [];
    
    const beforeCount = schedules.length;
    data.schedules = schedules.filter(s => {
        const matchesTask = s.taskId === taskId;
        const matchesDate = s.startDate === date || s.endDate === date;
        return !(matchesTask && matchesDate);
    });
    const afterCount = data.schedules.length;
    const deletedCount = beforeCount - afterCount;
    
    if (deletedCount === 0) {
        console.log(`테스크 ID "${taskId}"와 날짜 "${date}"에 해당하는 일정이 없습니다.`);
        return false;
    }
    
    localStorage.setItem('projectSchedules', JSON.stringify(data));
    console.log(`${deletedCount}개의 일정이 삭제되었습니다. (${beforeCount}개 → ${afterCount}개)`);
    return true;
}

// 8. 특정 테스크의 특정 사용자 + 특정 날짜 일정 삭제
function deleteSchedulesByTaskUserAndDate(taskId, userId, date) {
    const saved = localStorage.getItem('projectSchedules');
    if (!saved) {
        console.log('저장된 일정이 없습니다.');
        return false;
    }
    
    const data = JSON.parse(saved);
    const schedules = data.schedules || [];
    
    const beforeCount = schedules.length;
    data.schedules = schedules.filter(s => {
        const matchesTask = s.taskId === taskId;
        const matchesUser = s.userId === userId || s.userName === userId || s.user === userId;
        const matchesDate = s.startDate === date || s.endDate === date;
        return !(matchesTask && matchesUser && matchesDate);
    });
    const afterCount = data.schedules.length;
    const deletedCount = beforeCount - afterCount;
    
    if (deletedCount === 0) {
        console.log(`테스크 ID "${taskId}", 사용자 "${userId}", 날짜 "${date}"에 해당하는 일정이 없습니다.`);
        return false;
    }
    
    localStorage.setItem('projectSchedules', JSON.stringify(data));
    console.log(`${deletedCount}개의 일정이 삭제되었습니다. (${beforeCount}개 → ${afterCount}개)`);
    return true;
}

// 9. 특정 테스크의 특정 날짜 범위 일정 삭제
function deleteSchedulesByTaskAndDateRange(taskId, startDate, endDate) {
    const saved = localStorage.getItem('projectSchedules');
    if (!saved) {
        console.log('저장된 일정이 없습니다.');
        return false;
    }
    
    const data = JSON.parse(saved);
    const schedules = data.schedules || [];
    
    const beforeCount = schedules.length;
    data.schedules = schedules.filter(s => {
        const matchesTask = s.taskId === taskId;
        const matchesDateRange = s.startDate >= startDate && s.startDate <= endDate;
        return !(matchesTask && matchesDateRange);
    });
    const afterCount = data.schedules.length;
    const deletedCount = beforeCount - afterCount;
    
    if (deletedCount === 0) {
        console.log(`테스크 ID "${taskId}"와 날짜 범위 "${startDate} ~ ${endDate}"에 해당하는 일정이 없습니다.`);
        return false;
    }
    
    localStorage.setItem('projectSchedules', JSON.stringify(data));
    console.log(`${deletedCount}개의 일정이 삭제되었습니다. (${beforeCount}개 → ${afterCount}개)`);
    return true;
}

// 10. 모든 일정 삭제 (주의!)
function deleteAllSchedules() {
    if (!confirm('모든 일정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
        console.log('취소되었습니다.');
        return false;
    }
    
    const saved = localStorage.getItem('projectSchedules');
    if (!saved) {
        console.log('저장된 일정이 없습니다.');
        return false;
    }
    
    const data = JSON.parse(saved);
    const scheduleCount = (data.schedules || []).length;
    data.schedules = [];
    
    localStorage.setItem('projectSchedules', JSON.stringify(data));
    console.log(`모든 일정(${scheduleCount}개)이 삭제되었습니다.`);
    return true;
}

// 사용 예시:
console.log(`
=== 테스크 일정 삭제 헬퍼 ===

1. 모든 일정 확인:
   viewAllSchedules()

2. 특정 일정 ID로 삭제:
   deleteScheduleById('schedule-1234567890-abc123')

3. 특정 테스크의 모든 일정 삭제:
   deleteSchedulesByTaskId('task-001')

4. 특정 사용자의 모든 일정 삭제:
   deleteSchedulesByUser('user-kim')
   deleteSchedulesByUser('이경수')

5. 특정 날짜 범위의 일정 삭제:
   deleteSchedulesByDateRange('2025-12-01', '2025-12-31')

6. 특정 테스크의 특정 사용자 일정 삭제:
   deleteSchedulesByTaskAndUser('task-001', 'user-kim')
   deleteSchedulesByTaskAndUser('task-001', '이경수')

7. 특정 테스크의 특정 날짜 일정 삭제:
   deleteSchedulesByTaskAndDate('task-001', '2025-12-30')

8. 특정 테스크의 특정 사용자 + 특정 날짜 일정 삭제:
   deleteSchedulesByTaskUserAndDate('task-001', '이경수', '2025-12-30')

9. 특정 테스크의 특정 날짜 범위 일정 삭제:
   deleteSchedulesByTaskAndDateRange('task-001', '2025-12-01', '2025-12-31')

10. 모든 일정 삭제 (주의!):
    deleteAllSchedules()
`);

