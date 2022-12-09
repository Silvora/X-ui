

interface Theme{
    primary: string;
    info: string;
    danger: string;
    warning: string;
    success: string;
    default: string;
}

const ThemeColors:Theme={

    "primary": "#3498db",
    "info": "#2ecc71",
    "danger": "#e74c3c",
    "warning": "#f1c40f",
    "success": "#1abc9c",
    "default": "#8e44ad",
}


function resultColor(key:String) :String{
    return ThemeColors[key as keyof Theme]
}


export default resultColor