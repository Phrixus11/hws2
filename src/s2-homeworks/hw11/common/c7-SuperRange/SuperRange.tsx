import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#0c2',
                width: '150px',
              '& .MuiSlider-thumb': {
                backgroundColor: 'white',
                border: '2px solid #0c2',
                width: 24,
                height: 24,

                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'green',
                },

                '&:hover': {
                  boxShadow: '0 0 0 8px rgba(0, 255, 0, 0.16)',
                },
              },

              '& .MuiSlider-track': {
                backgroundColor: '#0c2',
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#ccc',
              }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)

        />
    )
}

export default SuperRange
