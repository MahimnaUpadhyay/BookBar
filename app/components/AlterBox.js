"use client"

import React from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlterBox = ({AlterTitle, onClick}) => {

    return (
        <>
            <ToastContainer />
            <AlertDialog>
                <AlertDialogTrigger
                    className="inline-flex items-center bg-secondary border-0 py-2 px-3 focus:outline-none 
                    hover:bg-primary rounded text-base mt-4 md:mt-0 hover:text-white font-medium"
                >
                    Sign Out
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{AlterTitle}</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick = {onClick}
                            className = "text-white"
                        >
                            Continue
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default AlterBox