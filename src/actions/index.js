

export const employDetails = (data) => ({
  type: "EMP_DETAILS",
  empData: data,
});

export const addEmployDetails = (data) => ({
    type: "ADD_EMP_DETAILS",
    addedEmpData: data,
  });

export const removeEmployDetails = (data) => ({
    type: "REMOVE_EMP_DETAILS",
    removeEmpData: data,
  });

export const editEmployDetails = (data) => ({
    type: "EDIT_EMP_DETAILS",
    editEmpData: data,
})