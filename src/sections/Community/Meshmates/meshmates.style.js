import styled from "styled-components";

const MeshMatesWrapper = styled.div`
    
    .hero{
      p{
          margin: 1.875rem auto 1rem auto;
       }
       h5{
          margin-top: 2.5rem;
          font-weight: 600;
       }
       
       .meshmate-logo-wrapper{
          display: flex;
          justify-content: center;
          background-color: ${props => props.theme.secondaryLightColorTwo};
          border-bottom-left-radius: 4.375rem;
          border-bottom-right-radius: 4.375rem;
          img{
            max-height: 25rem;
          }
          svg {
            height: 25rem;
            .meshmate-stack-colorMode_svg__colorMode1 {
                  fill: ${props => props.theme.whiteToGreen3C494F};
                }
          }
       }
    }
    .meshmates-grid{
        margin: 4.25rem auto;
        text-align: center;
        h1{
            margin-bottom: 0.9375rem;
        }
        p{
            margin-bottom: 3.125rem;
        }
    }
    
    .expect{
        p{
            margin: 1.875rem auto 0 auto;
        }
        h5{
            font-weight: 600;
        }
    }
.bookcomponent{
    align-items: center;
    float: right;
    margin: 1rem;
    padding: 20px;
}
@media (max-width: 576px) {
    .bookcomponent {
      float: none;
    }
  }
    .meshmate-meet{
        margin: 4.25rem auto 2.75rem auto;
        h2{
            margin-bottom: 1.875rem;
        }
        p{
            margin-bottom: 1.875rem;
        }
        table{
            .icon{
                padding-top: 5px;
                vertical-align: top;
                height: 2rem;
                width: 2rem
            }
            .feature{
                padding-left: 0.9375rem;
                h4{
                    font-weight: 600;
                    margin-bottom: 0.7rem;
                }
            }
        }
    }
    .conduct{
        margin: 0 auto 4.25rem auto;
        text-align: center;
        width: 90%;
        h2{
            margin-bottom: 1.25rem;
            font-weight: 700;
        }
        p{
            margin-bottom: 1.875rem;
        }
    }
    @media only screen and (max-width: 480px){
        .meshmates-grid{
            margin: 3.125rem auto;
        }
        .meshmate-meet{
            margin: 3.125rem auto 1.875rem auto;
            p{
                margin-bottom: 0.625rem;
            }
        }
    }

    .inactive-section {
        margin-top: 3rem;
        padding-top: 1.5rem;
        border-top: 1px solid ${props => props.theme.grey212121Toblack}; 
        
        h1 {
            color: ${props => props.theme.secondaryColor};
        }
        
        p {
            margin-bottom: 2rem;
        }
    }

    .emeritus-section {
        margin-top: 3rem;
        padding-top: 1.5rem;
        border-top: 1px solid ${props => props.theme.grey212121Toblack};
        
        h1 {
            color: ${props => props.theme.primaryColor};
        }
        
        p {
            margin-bottom: 2rem;
        }
    }
`;

export default MeshMatesWrapper;
