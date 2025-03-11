export interface LoginRespoonse {
    success:   boolean;
    message:   string;
    status:    string;
    data:      LoginData;
    token:     string;
    expiresIn: number;
}

export interface LoginData {
    employeeId: number;
    username:   string;
    firstName:  string;
    lastName:   string;
    address:    string;
    email:      string;
    role:       string;
}