export const managerAdded = (manager) => {
    return {
        type: "addManager",
        payload: manager,
    };
};

export const managerEdited = (id, pfp, emp_id, emp_name, emp_mail, emp_role, emp_mob, emp_date, emp_manager) => {
    return {
        type: "editManager",
        payload: { id, pfp, emp_id, emp_name, emp_mail, emp_role, emp_mob, emp_date, emp_manager }
    }
}

export const managerDeleted = (id) => {
    return {
        type: "deleteManager",
        payload: { id }
    }
}