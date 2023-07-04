import React, { useEffect, useState } from "react";
import Input from "./ui/Input";
import { userTypes } from "@/src/types";
import Button from "./ui/Button";

type PropsType = {
  isEdit: boolean;
  user?: userTypes.User;
  userUpdateFunc?: (user: userTypes.User) => void;
};

const StudentForm: React.FC<PropsType> = ({ isEdit, user, userUpdateFunc }) => {
  const [formData, setFormData] = useState<userTypes.StudentFormData>({
    companyName: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [editUserInitialData, setEditUserInitialData] =
    useState<userTypes.StudentFormData>();

  useEffect(() => {
    if (isEdit && user) {
      setFormData({
        ...user,
        companyName: user.company.name,
      });
      setEditUserInitialData({
        ...user,
        companyName: user.company.name,
      });
    }
  }, [isEdit, user]);

  const onChangeText = (
    value: string,
    key: keyof userTypes.StudentFormData
  ) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const addNewStudent = async () => {
    try {
      const body = {
        ...formData,
        company: {
          name: formData.companyName,
        },
      };

      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body }),
      }).then((res) => res.json());
      const successMessage = `
                Tebrikler Yeni Öğrenciniz eklendi.\n
                id=${response.id}\n
                full name=${response.firstName + response.lastName}\n
                email=${response.email}\n
                phone=${response.phone}\n
                company name=${response.company.name}\n
            `;
      alert(successMessage);
    } catch (error) {
      alert(error);
    }
  };
  const editStudent = async () => {
    if (!user) {
      alert("Bir Sorun ile Karşılaşıldı.");
      return;
    }
    if (JSON.stringify(formData) === JSON.stringify(editUserInitialData)) {
      alert("Herhangi Bir değişiklik Yapmadınız!!");
      return;
    }
    const body = {
      ...formData,
      company: {
        name: formData.companyName,
      },
    };

    const response = await fetch(`https://dummyjson.com/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body }),
    }).then((res) => res.json());
    const successMessage = `
            Tebrikler ${user.id} Nolu Öğrencinizin Bilgileri Güncellendi.\n
            id=${response.id}\n
            full name=${response.firstName + response.lastName}\n
            email=${response.email}\n
            phone=${response.phone}\n
            company name=${response.company.name}\n
        `;
    if (userUpdateFunc) {
      userUpdateFunc(response);
    }
    alert(successMessage);
  };
  const handleClick = () => {
    if (isEdit) {
      editStudent();
    } else {
      addNewStudent();
    }
  };

  return (
    <div className="w-full">
      <Input
        value={formData.firstName}
        onChange={(e) => onChangeText(e.target.value, "firstName")}
        label="First Name"
      />
      <Input
        value={formData.lastName}
        onChange={(e) => onChangeText(e.target.value, "lastName")}
        label="Last Name"
      />
      <Input
        value={formData.email}
        onChange={(e) => onChangeText(e.target.value, "email")}
        label="Email"
      />
      <Input
        value={formData.phone}
        onChange={(e) => onChangeText(e.target.value, "phone")}
        label="Phone"
      />
      <Input
        value={formData.companyName}
        onChange={(e) => onChangeText(e.target.value, "companyName")}
        label="Company Name"
      />
      <Button onClick={handleClick} title={isEdit ? "Edit" : "Add"} />
    </div>
  );
};

export default StudentForm;
